(function () {
   const µ = (µ, self) => eval(µ);
   const global = globalThis;
   const server = Java.type('org.bukkit.Bukkit').getServer();
   const core = {
      circular: function () {},
      clear: (io) => {
         io.isDirectory() && [ ...io.listFiles() ].forEach(core.clear);
         io.delete();
      },
      color: (text) => {
         return text.split('&').join('\xA7').split('\xA7\xA7').join('&');
      },
      command: (options) => {
         const name = options.name;
         const input = Object.assign(
            {
               prefix: 'grakkit',
               usage: `/${name} <...args>`,
               description: '{ description }',
               execute: () => {},
               tabComplete: () => []
            },
            options
         );
         const namekey = `${input.prefix}:${name}`;
         core.session.commands[namekey] = { execute: input.execute, tabComplete: input.tabComplete };
         if (!core.registry[namekey]) {
            const prefix = `(player,args)=>core.session.commands[${JSON.stringify(namekey)}]`;
            const suffix = "(player,...args.split(' '))";
            core.plugin.register(
               input.prefix,
               input.name,
               input.usage,
               input.description,
               `${prefix}.execute${suffix}`,
               `${prefix}.tabComplete${suffix}`
            );
         }
      },
      data: (path, standby) => {
         const store = core.session.data;
         const file = core.file(core.root, `data/${path}.json`);
         return store[path] || (store[path] = Object.assign(standby || {}, JSON.parse(file.read() || '{}')));
      },
      error: (error) => {
         let type = 'Error';
         let message = `${error}`;
         if (error.stack) {
            message = error.message;
            type = error.stack.split('\n')[0].split(' ')[0].slice(0, -1);
            switch (type) {
               case 'TypeError':
                  message = message.split('\n')[0];
                  if (message.startsWith('invokeMember')) {
                     const reason = message.split('failed due to: ')[1];
                     if (reason.startsWith('no applicable overload found')) {
                        const sets = reason.split('overloads:')[1].split(']],')[0].split(')]').map((set) => {
                           return `(${set.split('(').slice(1).join('(')})`;
                        });
                        message = `Invalid arguments! Expected: ${sets.join(' || ').slice(0, -1)}`;
                     } else if (reason.startsWith('Arity error')) {
                        message = `Insufficient arguments! Expected: ${reason.split('-')[1].split(' ')[2]}`;
                     } else if (reason.startsWith('UnsupportedTypeException')) {
                        message = 'Invalid arguments!';
                     } else if (reason.startsWith('Unknown identifier')) {
                        message = `That method (${reason.split(': ')[1]}) is not a member of its parent!`;
                     }
                  }
                  break;
               case 'SyntaxError':
                  message = message.split(' ').slice(1).join(' ').split('\n')[0];
                  break;
            }
         } else {
            type = error.split(' ')[0].slice(0, -1);
            message = error.split(' ').slice(1).join(' ');
         }
         return `${type}: ${message}`;
      },
      eval: (player, ...args) => {
         try {
            let output = undefined;
            const result = µ(args.join(' '), player);
            switch (toString.apply(result)) {
               case '[object Object]':
                  const names = Object.keys(result);
                  output = `{ ${names.map((name) => `${name}: ${core.output(result[name])}`).join(', ')} }`;
                  break;
               case '[object Function]':
                  output = `${result}`.replace(/\r/g, '');
                  break;
               case '[foreign HostFunction]':
                  let input = args.slice(-1)[0].split('.').slice(-1)[0];
                  input.endsWith(']') && (input = eval(input.replace(/.*\[/, '').slice(0, -1)));
                  output = `hostFunction ${input.split(/[|;]/g)[0]}() { [native code] }`;
                  break;
               default:
                  output = core.output(result);
                  break;
            }
            return output;
         } catch (error) {
            throw core.error(error);
         }
      },
      event: (name, listener) => {
         const store = core.session.events[name] || (core.session.events[name] = []);
         if (store.push(listener) === 1) {
            const manager = server.getPluginManager();
            manager.registerEvent(
               Java.type(name).class,
               new (Java.extend(Java.type('org.bukkit.event.Listener'), {}))(),
               Java.type('org.bukkit.event.EventPriority').HIGHEST,
               (info, event) => store.forEach((listener) => listener(event)),
               core.plugin
            );
         }
      },
      file: (...nodes) => {
         const io = java.nio.file.Path.of(...nodes).toFile();
         return {
            add: () => {
               core.parent(io);
               io.exists() || java.nio.file.Files.createFile(io.toPath());
               return io;
            },
            dir: () => {
               core.parent(io);
               io.exists() || io.mkdir();
               return io;
            },
            get exists () {
               return io.exists();
            },
            get extension () {
               return io.getPath().replace(/[\\]/g, '/').split('/').slice(-1)[0].split('.')[1] || null;
            },
            get io () {
               return io;
            },
            get parent () {
               return core.file(io.getParentFile().getPath());
            },
            get path () {
               return io.getPath().replace(/[\\]/g, '/');
            },
            read: () => {
               try {
                  const output = [];
                  const reader = new java.io.BufferedReader(new java.io.FileReader(io));
                  reader.lines().forEach((line) => output.push(line));
                  reader.close();
                  return output.join('\n');
               } catch (error) {
                  return null;
               }
            },
            remove: () => {
               io.exists() && core.clear(io);
               let context = io.getParentFile();
               if (context && context.exists()) {
                  while (context && !context.listFiles()[0]) {
                     context.delete();
                     context = context.getParentFile();
                  }
               }
               return io;
            },
            write: (data) => {
               try {
                  const writer = new java.io.PrintWriter(new java.io.FileWriter(io));
                  writer.print(data);
                  writer.close();
                  return true;
               } catch (error) {
                  return false;
               }
            }
         };
      },
      fetch: (location, callback) => {
         const conn = new java.net.URL(location).openConnection();
         conn.setDoOutput(true);
         conn.setRequestMethod('GET');
         conn.setInstanceFollowRedirects(true);
         if (conn.getResponseCode() === 200) {
            callback({
               stream: () => {
                  return conn.getInputStream();
               },
               text: () => {
                  return new java.util.Scanner(conn.getInputStream()).useDelimiter('\\A').next();
               },
               json: () => {
                  try {
                     return JSON.parse(new java.util.Scanner(conn.getInputStream()).useDelimiter('\\A').next());
                  } catch (error) {
                     return null;
                  }
               }
            });
         } else {
            callback(null, conn.getResponseCode());
         }
      },
      from: (query, array) => {
         return [ ...array ].sort().filter((value) => value.includes(query));
      },
      import: (source) => {
         const cache = core.session.cache;
         if (cache[source]) {
            return cache[source];
         } else {
            const file = core.file(core.root, `modules/${source}/package.json`);
            if (file.exists) {
               let info = undefined;
               try {
                  info = JSON.parse(file.read());
               } catch (error) {
                  throw `ImportError: "${file.path}" is not a valid JSON file!`;
               }
               if (info.main) {
                  info.main.endsWith('.js') || (info.main += '.js');
                  const index = core.file(`${file.parent.path}/${info.main}`);
                  if (index.exists) {
                     try {
                        return (cache[source] = core.parse(index.io));
                     } catch (error) {
                        console.error(error);
                        throw `ImportError: "${index.path}" threw an error during evaluation!`;
                     }
                  } else {
                     throw `ImportError: "${index.path}" does not exist!`;
                  }
               } else {
                  throw `ImportError: "${file.path}" is not a valid package file!`;
               }
            } else {
               throw `ImportError: "${file.path}" does not exist!`;
            }
         }
      },
      install: (source, callback) => {
         core.fetch(`https://api.github.com/repos/${source}/releases`, (response, error) => {
            let json = response.json();
            if (response && json) {
               if (json.message) {
                  console.error(`API - ${json.message}`);
                  callback(null, 'An API error occured!');
               } else {
                  core.options.channel === 'unsafe' || (json = json.filter((re) => re.draft === false));
                  core.options.channel === 'main' && (json = json.filter((re) => re.prerelease === false));
                  if (json[0]) {
                     if (core.modules[source] === json[0].id) {
                        callback(null, 'That module is already up to date!');
                     } else {
                        core.fetch(json[0].zipball_url, (response) => {
                           try {
                              const stream = new java.util.zip.ZipInputStream(response.stream());
                              const downloads = core.file(core.root, 'downloads');
                              let entry = undefined;
                              let output = undefined;
                              downloads.dir();
                              while ((entry = stream.getNextEntry())) {
                                 const file = core.file(downloads.path, entry.getName());
                                 if (entry.isDirectory()) {
                                    file.dir();
                                    output || (output = file);
                                 } else {
                                    const target = new java.io.FileOutputStream(file.add());
                                    stream.transferTo(target);
                                    target.close();
                                 }
                                 stream.closeEntry();
                              }
                              stream.close();
                              const destination = core.file(core.root, 'modules', source).dir();
                              [ ...destination.listFiles() ].forEach(core.clear);
                              java.nio.file.Files.move(
                                 output.io.toPath(),
                                 destination.toPath(),
                                 java.nio.file.StandardCopyOption.REPLACE_EXISTING
                              );
                              output.remove();
                              core.modules[source] = json[0].id;
                              callback(true);
                           } catch (error) {
                              console.error(`File - ${error}`);
                              callback(null, 'A file error occured!');
                           }
                        });
                     }
                  } else {
                     callback(null, 'Your current release channel has no available downloads!');
                  }
               }
            } else {
               console.error(`HTTP - ${error}`);
               callback(null, 'An HTTP error occured!');
            }
         });
      },
      get modules () {
         return core.data('grakkit/modules');
      },
      get options () {
         return core.data('grakkit/options', { channel: 'main', mode: 'manual' });
      },
      output: (object) => {
         if (object && object.constructor === core.circular) {
            return 'Circular';
         } else {
            const type = toString.apply(object);
            switch (type) {
               case '[object Object]':
               case '[object Function]':
               case '[foreign HostFunction]':
                  return type.split(' ')[1].slice(0, -1);
               case '[object Array]':
                  return `[ ${core.serialize(object).map(core.output).join(', ')} ]`;
               case '[foreign HostObject]':
                  const output = `${object}`;
                  if (!output || output.startsWith('class ')) {
                     return object.getCanonicalName ? object.getCanonicalName() : object.class.getCanonicalName();
                  } else {
                     return output;
                  }
               default:
                  switch (typeof object) {
                     case 'function':
                        return 'Function';
                     case 'string':
                        return `"${object}"`;
                     case 'symbol':
                        return `@@${`${object}`.slice(7, -1)}`;
                     default:
                        return `${object}`;
                  }
            }
         }
      },
      parent: (io) => {
         let context = io.getParentFile();
         if (!context.exists()) {
            const contexts = [];
            while (context && !context.exists()) {
               contexts.push(context);
               context = context.getParentFile();
            }
            contexts.reverse().forEach((folder) => folder.mkdir());
         }
      },
      parse: (io) => {
         let output = undefined;
         const source = Java.type('org.graalvm.polyglot.Source');
         const builder = source.newBuilder('js', io).mimeType('application/javascript+module');
         core.export = (value) => (output = value);
         try {
            core.plugin.context().eval(builder.build());
            delete core.export;
            return output;
         } catch (error) {
            delete core.export;
            throw core.error(error);
         }
      },
      plugin: server.getPluginManager().getPlugin('grakkit'),
      get registry () {
         return core.data('grakkit/registry');
      },
      get root () {
         return core.plugin.getDataFolder().getPath().replace(/[\\]/g, '/');
      },
      serialize: (object, nullify, nodes) => {
         if (typeof object === 'object') {
            if (object === null) {
               return null;
            } else {
               nodes || (nodes = [ object ]);
               let output = typeof object[Symbol.iterator] === 'function' ? [] : {};
               Object.keys(object).map((key) => {
                  const value = object[key];
                  if (nodes.includes(value)) {
                     output[key] = nullify ? null : new core.circular();
                  } else {
                     output[key] = core.serialize(value, nullify, [ ...nodes, object ]);
                  }
               });
               return output;
            }
         } else {
            return object;
         }
      },
      session: { cache: {}, commands: {}, data: {}, events: {}, modules: [] },
      setup: () => {
         core.command({
            name: 'js',
            execute: (player, ...args) => {
               try {
                  player.sendMessage(`\u00a77${core.eval(player, ...args)}`);
               } catch (error) {
                  player.sendMessage(`\u00a7c${error}`);
               }
            },
            tabComplete: (player, ...args) => {
               if (core.options.eval === 'enabled') {
                  const action = Java.type('net.md_5.bungee.api.ChatMessageType').ACTION_BAR;
                  const component = Java.type('net.md_5.bungee.api.chat.TextComponent');
                  try {
                     player.sendMessage(action, new component(`\u00a7f${core.eval(player, ...args)}`));
                  } catch (error) {
                     player.sendMessage(action, new component(`\u00a74${error}`));
                  }
               }
               const input = args.slice(-1)[0];
               const filter = /.*(\!|\^|\&|\*|\(|\-|\+|\=|\[|\{|\||\;|\:|\,|\?|\/)/;
               const nodes = input.replace(filter, '').split('.');
               let context = Object.assign(global, { self: global.self || player });
               let index = 0;
               while (index < nodes.length - 1) {
                  let node = nodes[index];
                  if (context[node]) {
                     context = context[node];
                     ++index;
                  } else {
                     index = Infinity;
                  }
               }
               if (index === nodes.length - 1) {
                  const segment = nodes.slice(-1)[0];
                  return Object.getOwnPropertyNames(context)
                     .filter((key) => key.toLowerCase().includes(segment.toLowerCase()))
                     .map((comp) => (input.match(filter) || [ '' ])[0] + [ ...nodes.slice(0, -1), comp ].join('.'));
               } else {
                  return [];
               }
            }
         });
         core.command({
            name: 'module',
            execute: (player, option, value) => {
               option && (option = option.toLowerCase());
               value && (value = value.toLowerCase());
               if (option) {
                  const keys = Object.keys(core.modules);
                  switch (option) {
                     case 'add':
                     case 'remove':
                     case 'update':
                        if (value === '*') {
                           if (option === 'add') {
                              player.sendMessage('\u00a77One sec, just need to download the entire GitHub database...');
                           } else {
                              if (keys[0]) {
                                 switch (option) {
                                    case 'remove':
                                       player.sendMessage('\u00a77Deleting...');
                                       keys.forEach((value) => {
                                          delete core.modules[value];
                                          core.file(core.root, `modules/${value}`).remove();
                                          player.sendMessage(`\u00a77Module deleted. (${value})`);
                                       });
                                       player.sendMessage('\u00a77Modules deleted.');
                                       break;
                                    case 'update':
                                       player.sendMessage('\u00a77Updating...');
                                       let update = (index) => {
                                          const value = keys[index];
                                          core.install(value, (data, reason) => {
                                             if (data) player.sendMessage(`\u00a77Module updated. (${value})`);
                                             else player.sendMessage(`\u00a7c${reason} \u00a77(${value})`);
                                             if (++index < keys.length) update(index);
                                             else player.sendMessage('\u00a77Modules updated.');
                                          });
                                       };
                                       update(0);
                                       break;
                                 }
                              } else {
                                 player.sendMessage(`\u00a7cThere are no modules to ${option}!`);
                              }
                           }
                        } else if (value) {
                           if (value.split('/')[1] && value.split('/').length === 2) {
                              switch (option) {
                                 case 'add':
                                    if (core.modules[value]) {
                                       player.sendMessage('\u00a7cThat module is already installed!');
                                    } else {
                                       player.sendMessage('\u00a77Installing...');
                                       core.install(value, (data, reason) => {
                                          if (data) player.sendMessage('\u00a77Module installed.');
                                          else player.sendMessage(`\u00a7c${reason}`);
                                       });
                                    }
                                    break;
                                 case 'remove':
                                    if (core.modules[value]) {
                                       player.sendMessage('\u00a77Deleting...');
                                       delete core.modules[value];
                                       core.file(core.root, `modules/${value}`).remove();
                                       player.sendMessage('\u00a77Module deleted.');
                                    } else {
                                       player.sendMessage('\u00a7cThat module has not been installed!');
                                    }
                                    break;
                                 case 'update':
                                    if (core.modules[value]) {
                                       player.sendMessage('\u00a77Updating...');
                                       core.install(value, (data, reason) => {
                                          if (data) player.sendMessage('\u00a77Module updated.');
                                          else player.sendMessage(`\u00a7c${reason}`);
                                       });
                                    } else {
                                       player.sendMessage('\u00a7cThat module has not been installed!');
                                    }
                                    break;
                              }
                           } else {
                              player.sendMessage('\u00a7cThat repository is invalid!');
                           }
                        } else {
                           player.sendMessage('\u00a7cYou must specify a repository!');
                        }
                        break;
                     case 'channel':
                        if (value) {
                           if ([ 'main', 'dev', 'all' ].includes(value)) {
                              core.options.channel = value;
                              player.sendMessage('\u00a77Release channel updated.');
                           } else {
                              player.sendMessage('\u00a7cThat is not a valid release channel!');
                           }
                        } else {
                           player.sendMessage('\u00a7cYou must specify a release channel!');
                        }
                        break;
                     case 'list':
                        player.sendMessage(`\u00a77Installed modules: ${core.output(keys)}`);
                        break;
                     default:
                        player.sendMessage('\u00a7cThat option does not exist!');
                        break;
                  }
               } else {
                  player.sendMessage('\u00a7cYou must specify an option!');
               }
            },
            tabComplete: (player, option, value, appendix) => {
               option && (option = option.toLowerCase());
               value && (value = value.toLowerCase());
               if (appendix !== undefined) {
                  return [];
               } else if (value !== undefined) {
                  switch (option) {
                     case 'add':
                        return core.from(value, core.session.modules);
                     case 'channel':
                        return core.from(value, [ 'main', 'dev', 'unsafe' ]);
                     case 'remove':
                     case 'update':
                        return core.from(value, [ '*', ...Object.keys(core.modules) ]);
                     default:
                        return [];
                  }
               } else if (option !== undefined) {
                  return core.from(option, [ 'add', 'channel', 'list', 'remove', 'update' ]);
               } else {
                  return [];
               }
            }
         });
         core.command({
            name: 'grakkit',
            execute: (player, option, value) => {
               option && (option = option.toLowerCase());
               value && (value = value.toLowerCase());
               if (option) {
                  switch (option) {
                     case 'mode':
                        if (value) {
                           if ([ 'manual', 'automatic' ].includes(value)) {
                              core.options.mode = value;
                              player.sendMessage('\u00a77Update mode updated.');
                           } else {
                              player.sendMessage('\u00a7cThat is not a valid update mode!');
                           }
                        } else {
                           player.sendMessage('\u00a7cYou must specify an update mode!');
                        }
                        break;
                     case 'eval':
                        if (value) {
                           if ([ 'enabled', 'disabled' ].includes(value)) {
                              core.options.eval = value;
                              player.sendMessage(`\u00a77Live evaluation ${value}.`);
                           } else {
                              player.sendMessage('\u00a7cThat is not a valid state!');
                           }
                        } else {
                           player.sendMessage('\u00a7cYou must specify a state!');
                        }
                        break;
                     case 'update':
                        core.file(core.root, 'index.js').remove();
                        server.reload();
                        player.sendMessage('\u00a77Update complete.');
                        break;
                     /*
                     case 'refresh':
                        player.sendMessage('\u00a77Refreshing...');
                        Object.keys(core.session.commands).forEach((namekey) => (core.registry[namekey] = true));
                        server.getPluginManager().disablePlugin(core.plugin);
                        server.getPluginManager().enablePlugin(core.plugin);
                        player.sendMessage('\u00a77Refresh complete.');
                        break;
                     */
                     default:
                        player.sendMessage('\u00a7cThat option does not exist!');
                  }
               } else {
                  player.sendMessage('\u00a7cYou must specify an option!');
               }
            },
            tabComplete: (player, option, value, appendix) => {
               option && (option = option.toLowerCase());
               value && (value = value.toLowerCase());
               if (appendix !== undefined) {
                  return [];
               } else if (value !== undefined) {
                  switch (option) {
                     case 'mode':
                        return core.from(value, [ 'manual', 'automatic' ]);
                     case 'eval':
                        return core.from(value, [ 'enabled', 'disabled' ]);
                     default:
                        return [];
                  }
               } else if (option !== undefined) {
                  return core.from(option, [ 'update', 'mode', 'eval' /* 'refresh' */ ]);
               } else {
                  return [];
               }
            }
         });
         core.fetch('https://raw.githubusercontent.com/grakkit/core/master/modules.json', (response) => {
            const json = response.json();
            json && (core.session.modules = json);
         });
         core.event('org.bukkit.event.server.PluginDisableEvent', (event) => {
            if (event.getPlugin() === core.plugin) {
               core.options.mode === 'automatic' && core.file(core.root, 'index.js').remove();
               Object.keys(core.session.data).forEach((path) => {
                  const file = core.file(core.root, `data/${path}.json`);
                  file.add();
                  file.write(JSON.stringify(core.serialize(core.session.data[path], true)));
               });
            }
         });
         [ ...core.file(core.root, 'scripts').dir().listFiles() ].filter((io) => !io.isDirectory()).forEach((io) => {
            try {
               core.parse(io);
            } catch (error) {
               console.error(error);
               console.error(`ScriptError: "${io.getPath().replace(/[\\]/g, '/')}" threw an error during evaluation!`);
            }
         });
         Object.keys(core.registry).forEach((namekey) => delete core.registry[namekey]);
      }
   };
   Object.assign(global, { core: core, global: global, server: server });
   core.setup();
})();
