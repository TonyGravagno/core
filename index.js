const µ = (µ) => Polyglot.eval('js', µ);
(function () {
   // import types
   const URL = Java.type('java.net.URL');
   const Path = Java.type('java.nio.file.Path');
   const Files = Java.type('java.nio.file.Files');
   const Bukkit = Java.type('org.bukkit.Bukkit');
   const Source = Java.type('org.graalvm.polyglot.Source');
   const Command = Java.extend(Java.type('org.bukkit.command.Command'));
   const Scanner = Java.type('java.util.Scanner');
   const Listener = Java.extend(Java.type('org.bukkit.event.Listener'), {});
   const FileReader = Java.type('java.io.FileReader');
   const FileWriter = Java.type('java.io.FileWriter');
   const PrintWriter = Java.type('java.io.PrintWriter');
   const EventPriority = Java.type('org.bukkit.event.EventPriority');
   const TextComponent = Java.type('net.md_5.bungee.api.chat.TextComponent');
   const BufferedReader = Java.type('java.io.BufferedReader');
   const ZipInputStream = Java.type('java.util.zip.ZipInputStream');
   const ChatMessageType = Java.type('net.md_5.bungee.api.ChatMessageType');
   const FileOutputStream = Java.type('java.io.FileOutputStream');
   const StandardCopyOption = Java.type('java.nio.file.StandardCopyOption');

   // useful shit
   const global = globalThis;
   const server = Bukkit.getServer();

   // the holy grail
   const commandMap = server.getClass().getDeclaredField('commandMap');
   commandMap.setAccessible(true);
   const registry = commandMap.get(server);

   // core functions
   const core = {
      // circular marker
      circular: function () {},

      // recursive folder deletion
      clear: (io) => {
         io.isDirectory() && [ ...io.listFiles() ].forEach(core.clear);
         io.delete();
      },

      // custom command creator
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
         const prefix = `(player,args)=>core.session.commands[${JSON.stringify(namekey)}]`;
         const suffix = "(player,...args.split(' '))";
         const command = new Command(name, {
            execute: (player, label, args) => {
               try {
                  eval(`${prefix}.execute${suffix}`)(player, ...args);
                  return true;
               } catch (error) {
                  console.error(error.stack);
                  return false;
               }
            },
            tabComplete: (player, label, args) => {
               try {
                  return eval(`${prefix}.tabComplete${suffix}`)(player, ...args);
               } catch (error) {
                  console.error(error.stack);
                  return [];
               }
            }
         });
         command.setUsage(input.usage);
         command.setDescription(input.description);
         registry.register(input.prefix, command);
      },

      // persistent data storage
      data: (path, standby) => {
         const store = core.session.data;
         const file = core.file(core.root, `data/${path}.json`);
         return store[path] || (store[path] = Object.assign(standby || {}, JSON.parse(file.read() || '{}')));
      },

      // internal error formatter
      error: (error) => {
         let type = 'Error';
         let message = `${error}`;
         if (error.stack) {
            type = error.stack.split('\n')[0].split(' ')[0].slice(0, -1);
            message = error.message;
            switch (type) {
               case 'TypeError':
                  try {
                     if (message.startsWith('invokeMember') || message.startsWith('execute on foreign object')) {
                        const reason = message.split('failed due to: ')[1];
                        if (reason.startsWith('no applicable overload found')) {
                           const sets = reason.split('overloads:')[1].split(']],')[0].split(')]').map((set) => {
                              return `(${set.split('(').slice(1).join('(')})`;
                           });
                           message = [ 'Invalid arguments! Expected:\u00a74', ...sets ].join('\n -> ').slice(0, -1);
                        } else if (reason.startsWith('Arity error')) {
                           message = `Insufficient arguments! Expected: ${reason.split('-')[1].split(' ')[2]}`;
                        } else if (reason.startsWith('UnsupportedTypeException')) {
                           message = 'Invalid arguments!';
                        } else if (reason.startsWith('Unknown identifier')) {
                           message = `That method (${reason.split(': ')[1]}) is not a member of its parent!`;
                        } else if (reason.startsWith('Message not supported')) {
                           message = `That method (${message.slice(14).split(')')[0]}) is not a member of its parent!`;
                        } else {
                           message = message.split('\n')[0];
                        }
                     }
                  } catch (error) {
                     message = message.split('\n')[0];
                  }
                  break;
               case 'SyntaxError':
                  message = message.split(' ').slice(1).join(' ').split('\n')[0];
                  break;
            }
         } else {
            error = `${error}`;
            type = error.split(' ')[0].slice(0, -1);
            message = error.split(' ').slice(1).join(' ');
         }
         return `${type}: ${message}`;
      },

      // code evaluation
      eval: (player, ...args) => {
         const self = global.hasOwnProperty('self');
         try {
            let output = undefined;
            self || (global.self = player);
            const result = µ(args.join(' '));
            self || delete global.self;
            switch (toString.apply(result)) {
               case '[object Object]':
                  const names = Object.getOwnPropertyNames(result);
                  output = `{ ${names.map((name) => `${name}: ${core.output(result[name])}`).join(', ')} }`;
                  break;
               case '[object Function]':
                  output = result.toString().replace(/\r/g, '');
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
            self || delete global.self;
            throw core.error(error);
         }
      },

      // module export handler
      get export () {
         return core.session.exporters.slice(-1)[0];
      },

      // server event handler
      event: (name, listener) => {
         const store = core.session.events[name] || (core.session.events[name] = []);
         if (store.push(listener) === 1) {
            const manager = server.getPluginManager();
            manager.registerEvent(
               Java.type(name).class,
               new Listener(),
               EventPriority.HIGHEST,
               (info, event) => store.forEach((listener) => listener(event)),
               core.plugin
            );
         }
      },

      // file manipulation code
      file: (...nodes) => {
         const io = Path.of(...nodes).toFile();
         let parent = (io) => {
            let context = io.getParentFile();
            if (!context.exists()) {
               const contexts = [];
               while (context && !context.exists()) {
                  contexts.push(context);
                  context = context.getParentFile();
               }
               contexts.reverse().forEach((folder) => folder.mkdir());
            }
         };
         return {
            add: () => {
               parent(io);
               io.exists() || Files.createFile(io.toPath());
               return io;
            },
            dir: () => {
               parent(io);
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
                  const reader = new BufferedReader(new FileReader(io));
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
                  const writer = new PrintWriter(new FileWriter(io));
                  writer.print(data);
                  writer.close();
                  return true;
               } catch (error) {
                  return false;
               }
            }
         };
      },

      // web request function
      fetch: (location, callback) => {
         const conn = new URL(location).openConnection();
         conn.setDoOutput(true);
         conn.setRequestMethod('GET');
         conn.setInstanceFollowRedirects(true);
         if (conn.getResponseCode() === 200) {
            callback({
               stream: () => {
                  return conn.getInputStream();
               },
               text: () => {
                  return new Scanner(conn.getInputStream()).useDelimiter('\\A').next();
               },
               json: () => {
                  try {
                     return JSON.parse(new Scanner(conn.getInputStream()).useDelimiter('\\A').next());
                  } catch (error) {
                     return null;
                  }
               }
            });
         } else {
            callback(null, conn.getResponseCode());
         }
      },

      // tab-completion helper
      from: (query, array) => {
         return [ ...array ].sort().filter((value) => value.includes(query));
      },

      // typescript generator
      generate: () => {
         const modules = Object.keys(core.modules);
         const imports = modules.map((name, index) => {
            return `import*as i${index} from'./modules/${name}/module';type t${index}=typeof i${index}.Main`;
         });
         const exports = modules.map((name, index) => {
            return `import(name:'${name}'):t${index}`;
         });
         const dictionary = core.file(core.root, 'modules.d.ts');
         dictionary.add();
         dictionary.write(`${imports.join(';')};class core{${exports.join(';')}}`);
      },

      // module importer
      import: (source) => {
         if (core.session.cache[source]) {
            return core.session.cache[source];
         } else {
            const file = core.file(core.root, `modules/${source}/package.json`);
            let info = undefined;
            try {
               info = file.exists ? JSON.parse(file.read()) : { main: 'index' };
            } catch (error) {
               throw `ImportError: "${file.path}" is not a valid JSON file!`;
            }
            if (info.main) {
               info.main.endsWith('.js') || (info.main += '.js');
               const index = core.file(`${file.parent.path}/${info.main}`);
               if (index.exists) {
                  try {
                     return (core.session.cache[source] = core.parse(index));
                  } catch (error) {
                     console.error(error.stack || error);
                     throw `ImportError: "${index.path}" threw an error during evaluation!`;
                  }
               } else {
                  throw `ImportError: "${index.path}" does not exist!`;
               }
            } else {
               throw `ImportError: "${file.path}" is not a valid package file!`;
            }
         }
      },

      // module installer
      install: (source, callback) => {
         core.fetch(`https://api.github.com/repos/${source}/releases`, (response, error) => {
            let json = response.json();
            if (response && json) {
               if (json.message) {
                  console.error(`API - ${json.message}`);
                  callback(null, 'An API error occured!');
               } else {
                  json = json.filter((re) => re.draft === false);
                  core.options.channel === 'main' && (json = json.filter((re) => re.prerelease === false));
                  if (json[0]) {
                     if (core.modules[source] === json[0].id) {
                        callback(null, 'That module is already up to date!');
                     } else {
                        core.fetch(json[0].zipball_url, (response) => {
                           try {
                              const stream = new ZipInputStream(response.stream());
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
                                    const target = new FileOutputStream(file.add());
                                    stream.transferTo(target);
                                    target.close();
                                 }
                                 stream.closeEntry();
                              }
                              stream.close();
                              const destination = core.file(core.root, 'modules', source).dir();
                              [ ...destination.listFiles() ].forEach(core.clear);
                              Files.move(output.io.toPath(), destination.toPath(), StandardCopyOption.REPLACE_EXISTING);
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

      // installed module list
      get modules () {
         return core.data('grakkit/modules');
      },

      // persistent option storage
      get options () {
         return core.data('grakkit/options');
      },

      // object pretty printer
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
                     return object.getCanonicalName
                        ? object.getCanonicalName()
                        : object.class ? object.class.getCanonicalName() : object;
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

      // script file parser
      parse: (file) => {
         let output = undefined;
         const builder = Source.newBuilder('js', file.io).cached(false);
         try {
            core.session.exporters.push((value) => (output = value));
            const context = core.plugin.getClass().getDeclaredField('context').get(core.plugin);
            context.eval(builder.mimeType('application/javascript+module').build());
            core.session.exporters.pop();
            return output;
         } catch (error) {
            core.session.exporters.pop();
            throw core.error(error);
         }
      },

      // grakkit plugin access
      get plugin () {
         return server.getPluginManager().getPlugin('grakkit');
      },

      // plugin folder location
      get root () {
         return core.plugin.getDataFolder().getPath().replace(/[\\]/g, '/');
      },

      // object decircularizer
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

      // per-refresh storage
      session: { cache: {}, commands: {}, exporters: [], data: {}, events: {}, modules: [] }
   };

   // extend basic shit to global
   Object.assign(global, { core: core, global: global, server: server, net: Packages.net });

   // command: js
   core.command({
      name: 'js',
      execute: (player, ...args) => {
         try {
            player.sendMessage(`§7${core.eval(player, ...args)}`);
         } catch (error) {
            player.sendMessage(`§c${error}`);
         }
      },
      tabComplete: (player, ...args) => {
         if (core.options.eval === 'enabled') {
            try {
               player.sendMessage(ChatMessageType.ACTION_BAR, new TextComponent(`§f${core.eval(player, ...args)}`));
            } catch (error) {
               player.sendMessage(ChatMessageType.ACTION_BAR, new TextComponent(`§4${error}`));
            }
         }
         const input = args.slice(-1)[0];
         const filter = /.*(\!|\^|\&|\*|\(|\-|\+|\=|\{|\||\;|\:|\,|\?|\/)/;
         const nodes = input.replace(filter, '').replace(/(\[)|(\]\.)/g, '.').split('.');
         let context = Object.assign({ self: global.self }, global);
         let index = 0;
         while (index < nodes.length - 1) {
            let node = nodes[index++];
            [ "'", '"', '`' ].includes(node[0]) && (node = node.slice(1, -1));
            node[0].match(/[0-9]/g) && (node = Number(node));
            if (context[node]) context = context[node];
            else index = Infinity;
         }
         if (index === nodes.length - 1) {
            const base = (input.match(filter) || [ '' ])[0] + input.replace(filter, '');
            let segment = nodes.slice(-1)[0];
            [ "'", '"', '`' ].includes(segment[0]) && (segment = segment.slice(1, -1));
            const properties = Object.getOwnPropertyNames(context);
            if (typeof context.length === 'number' && [ 'object', 'function' ].includes(typeof context[0])) {
               properties.push(...Array(context.length).join(' ').split(' ').map((value, index) => `${index}`));
            }
            return properties
               .filter((key) => key.toLowerCase().includes(segment.toLowerCase()))
               .map((key) => {
                  let property = '';
                  if (key[0].match(/[0-9]/g)) property = `[${key}]`;
                  else if (key.match(/[^0-9A-Za-z|\_|\$]/g)) property = `[\`${key.split('`').join('\\`')}\`]`;
                  else property = `.${key}`;
                  const path = base.split(property[0]);
                  const name = property.slice(1);
                  if (!base || !base.match(/[\.\[]/g)) return base.replace(base.replace(filter, ''), '') + name;
                  else if (name.includes(path.slice(-1)[0])) return path.slice(0, -1).join(property[0]) + property;
               })
               .filter((property) => property);
         } else {
            return [];
         }
      }
   });

   // command: module
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
                        player.sendMessage('§7One sec, just need to download the entire GitHub database...');
                     } else {
                        if (keys[0]) {
                           switch (option) {
                              case 'remove':
                                 player.sendMessage('§7Deleting...');
                                 keys.forEach((value) => {
                                    delete core.modules[value];
                                    core.file(core.root, `modules/${value}`).remove();
                                    player.sendMessage(`§7Module deleted. (${value})`);
                                 });
                                 player.sendMessage('§7Modules deleted.');
                                 break;
                              case 'update':
                                 player.sendMessage('§7Updating...');
                                 let update = (index) => {
                                    const value = keys[index];
                                    core.install(value, (data, reason) => {
                                       if (data) player.sendMessage(`§7Module updated. (${value})`);
                                       else player.sendMessage(`§c${reason} §7(${value})`);
                                       if (++index < keys.length) update(index);
                                       else player.sendMessage('§7Modules updated.');
                                    });
                                 };
                                 update(0);
                                 break;
                           }
                        } else {
                           player.sendMessage(`§cThere are no modules to ${option}!`);
                        }
                     }
                  } else if (value) {
                     if (value.split('/')[1] && value.split('/').length === 2) {
                        switch (option) {
                           case 'add':
                              if (core.modules[value]) {
                                 player.sendMessage('§cThat module is already installed!');
                              } else {
                                 player.sendMessage('§7Installing...');
                                 core.install(value, (data, reason) => {
                                    if (data) {
                                       core.generate();
                                       player.sendMessage('§7Module installed.');
                                    } else {
                                       player.sendMessage(`§c${reason}`);
                                    }
                                 });
                              }
                              break;
                           case 'remove':
                              if (core.modules[value]) {
                                 player.sendMessage('§7Deleting...');
                                 delete core.modules[value];
                                 core.file(core.root, `modules/${value}`).remove();
                                 core.generate();
                                 player.sendMessage('§7Module deleted.');
                              } else {
                                 player.sendMessage('§cThat module has not been installed!');
                              }
                              break;
                           case 'update':
                              if (core.modules[value]) {
                                 player.sendMessage('§7Updating...');
                                 core.install(value, (data, reason) => {
                                    if (data) player.sendMessage('§7Module updated.');
                                    else player.sendMessage(`§c${reason}`);
                                 });
                              } else {
                                 player.sendMessage('§cThat module has not been installed!');
                              }
                              break;
                        }
                     } else {
                        player.sendMessage('§cThat repository is invalid!');
                     }
                  } else {
                     player.sendMessage('§cYou must specify a repository!');
                  }
                  break;
               case 'channel':
                  if (value) {
                     if ([ 'main', 'dev' ].includes(value)) {
                        core.options.channel = value;
                        player.sendMessage('§7Release channel updated.');
                     } else {
                        player.sendMessage('§cThat is not a valid release channel!');
                     }
                  } else {
                     player.sendMessage('§cYou must specify a release channel!');
                  }
                  break;
               case 'list':
                  player.sendMessage(`§7Installed modules: ${core.output(keys)}`);
                  break;
               default:
                  player.sendMessage('§cThat option does not exist!');
                  break;
            }
         } else {
            player.sendMessage('§cYou must specify an option!');
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
                  return core.from(value, [ 'main', 'dev' ]);
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

   // command: grakkit
   core.command({
      name: 'grakkit',
      execute: (player, option, value) => {
         option && (option = option.toLowerCase());
         value && (value = value.toLowerCase());
         if (option) {
            switch (option) {
               case 'eval':
                  if (value) {
                     if ([ 'enabled', 'disabled' ].includes(value)) {
                        core.options.eval = value;
                        player.sendMessage(`§7Live evaluation ${value}.`);
                     } else {
                        player.sendMessage('§cThat is not a valid state!');
                     }
                  } else {
                     player.sendMessage('§cYou must specify a state!');
                  }
                  break;
               case 'mode':
                  if (value) {
                     if ([ 'manual', 'automatic' ].includes(value)) {
                        core.options.mode = value;
                        player.sendMessage('§7Update mode updated.');
                     } else {
                        player.sendMessage('§cThat is not a valid update mode!');
                     }
                  } else {
                     player.sendMessage('§cYou must specify an update mode!');
                  }
                  break;
               case 'refresh':
                  server.getPluginManager().disablePlugin(core.plugin);
                  server.getPluginManager().enablePlugin(core.plugin);
                  player.sendMessage('§7Refresh complete.');
                  break;
               case 'script':
                  if (value) {
                     if (value.includes('/')) {
                        player.sendMessage('§cThat file name is invalid!');
                     } else {
                        const source = core.file(core.root, core.options.script || 'user.js');
                        const target = core.file(core.root, value);
                        Files.move(source.io.toPath(), target.io.toPath(), StandardCopyOption.REPLACE_EXISTING);
                        core.options.script = value;
                        player.sendMessage('§7Script location updated.');
                     }
                  } else {
                     player.sendMessage('§cYou must specify a file name!');
                  }
                  break;
               case 'update':
                  core.file(core.root, 'index.js').remove();
                  server.reload();
                  player.sendMessage('§7Update complete.');
                  break;
               default:
                  player.sendMessage('§cThat option does not exist!');
            }
         } else {
            player.sendMessage('§cYou must specify an option!');
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
                  return core.from(value, [ 'automatic', 'manual' ]);
               case 'eval':
                  return core.from(value, [ 'disabled', 'enabled' ]);
               case 'script':
                  return core.from(value, [ core.options.script || 'user.js' ]);
               default:
                  return [];
            }
         } else if (option !== undefined) {
            return core.from(option, [ 'eval', 'mode', 'refresh', 'script', 'update' ]);
         } else {
            return [];
         }
      }
   });

   // add module tab-completion list
   core.fetch('https://raw.githubusercontent.com/grakkit/core/master/modules.json', (response) => {
      if (response) {
         const json = response.json();
         json && (core.session.modules = json);
      }
   });

   // plugin reload handler
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

   // parse script
   const script = core.file(core.root, core.options.script || 'user.js');
   if (!script.exists) script.add(), script.write(`/** @type{import('./modules').core} */ const core = global.core;\n`);
   core.parse(script);
})();
