/* grakkit index file */
(function () {
   'use strict';

   /* shortcuts to useful shit */
   const global = globalThis;
   const server = org.bukkit.Bukkit.getServer();
   const plugin = server.getPluginManager().getPlugin('grakkit');

   /* core functions */
   const core = {
      /* async and/or timed code execution */
      async: {
         /* run task immediately */
         immediate: (script) => {
            return server.getScheduler().runTask(plugin, core.async.runnable(script));
         },

         /* run task with a timer */
         interval: (script, interval) => {
            return server.getScheduler().runTaskTimer(plugin, core.async.runnable(script), 0, interval);
         },

         /* create a runnable from function */
         runnable: (script) => {
            return new (Java.extend(java.lang.Runnable))({ run: script });
         },

         /* run task with a delay */
         timeout: (script, delay) => {
            return server.getScheduler().runTaskLater(plugin, core.async.runnable(script), delay);
         }
      },

      /* circular reference placeholder */
      circular: function Circular () {},

      /* remove all files from folder recursively */
      clear: (folder) => {
         const files = folder.listFiles();
         if (files) {
            for (let index = 0; index < files.length; ++index) {
               const file = files[index];
               file.isDirectory() ? core.clear(file) : file.delete();
            }
         }
         folder.delete();
      },

      /* convert essentials-style color codes to vanilla color codes */
      color: (text) => {
         return text.split('&').join('\xA7').split('\xA7\xA7').join('&');
      },

      /* register custom commands (awesome) */
      command: (options) => {
         const name = options.name;
         const input = Object.assign(
            {
               prefix: 'grakkit',
               usage: `/${name} <...args>`,
               description: 'A Minecraft command',
               execute: () => {},
               tabComplete: () => []
            },
            options
         );
         core.commands[name] = { execute: input.execute, tabComplete: input.tabComplete };
         const prefix = `(player,args)=>core.commands[${JSON.stringify(name)}]`;
         const suffix = "(player,...args.split(' '))";
         const status = plugin.register(
            input.prefix,
            input.name,
            input.usage,
            input.description,
            `${prefix}.execute${suffix}`,
            `${prefix}.tabComplete${suffix}`
         );
         return status ? name : `${prefix}:${name}`;
      },

      /* custom command database */
      commands: {},

      /* namespaced-keyed persistent data storage access */
      data: (namespace, key) => {
         const store = core.store({ data: {}, [namespace]: {} });
         const file = core.folder(core.root, 'data', namespace).file(`${key}.json`);
         return store[key] || (store[key] = JSON.parse(file.read() || '{}'));
      },

      /* object pretty printer */
      display: (object) => {
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
                  return `[ ${core.serialize(object).map(core.display).join(', ')} ]`;
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

      /* autofill parent folder chain for given file path */
      ensure: (path) => {
         if (path.make) {
            path.make();
            return path;
         } else {
            core.traverse([], path, {
               mode: 'array',
               post: (context) => {
                  const file = core.stat(...context).file();
                  file.exists() || file.mkdir();
               }
            });
         }
      },

      /* isolated-context code evaluation */
      eval: (µ, self) => {
         return eval(µ);
      },

      /* listen for server events */
      event: (name, listener) => {
         const store = core.store({ event: {}, [name]: [] });
         if (store.push(listener) === 1) {
            server
               .getPluginManager()
               .registerEvent(
                  core.eval(name).class,
                  new (Java.extend(org.bukkit.event.Listener, {}))(),
                  org.bukkit.event.EventPriority.HIGHEST,
                  (info, data) => store.forEach((listener) => listener(data)),
                  plugin
               );
         }
      },

      /* make web requests */
      fetch: (location) => {
         return new Promise((resolve, reject) => {
            core.async.immediate(() => {
               try {
                  const conn = new java.net.URL(location).openConnection();
                  conn.setDoOutput(true);
                  conn.setRequestMethod('GET');
                  conn.setInstanceFollowRedirects(true);
                  if (conn.getResponseCode() === 200) {
                     resolve({
                        stream: () => {
                           return conn.getInputStream();
                        },
                        response: () => {
                           return new java.util.Scanner(conn.getInputStream()).useDelimiter('\\A').next();
                        }
                     });
                  } else {
                     reject(conn.getResponseCode());
                  }
               } catch (error) {
                  console.log(error);
               }
            });
         });
      },

      /* file manipulation code */
      file: (...nodes) => {
         const file = core.stat(...nodes).file();
         return {
            folder: () => {
               return core.folder(file.getParentFile());
            },
            io: () => {
               return file;
            },
            exists: () => {
               return file.exists();
            },
            make: () => {
               file.exists() || java.nio.file.Files.createFile(file.toPath());
               return core.file(...nodes);
            },
            path: () => {
               return core.stat(`${file.toPath()}`).path();
            },
            read: () => {
               if (file.exists()) {
                  const output = [];
                  const reader = new java.io.BufferedReader(new java.io.FileReader(file));
                  reader.lines().forEach((line) => output.push(line));
                  reader.close();
                  return output.join('');
               } else {
                  return '';
               }
            },
            remove: (parent) => {
               file.exists() && file.delete();
               if (parent && file.getParentFile().exists()) {
                  let context = file.getParentFile();
                  while (context.listFiles().length === 0) {
                     context.delete();
                     context = context.getParentFile();
                  }
               }
            },
            write: (data) => {
               core.ensure(`${file.getParentFile().getPath()}`.replace(/\\/g, '/').split('/'));
               file.exists() || java.nio.file.Files.createFile(file.toPath());
               const writer = new java.io.PrintWriter(new java.io.FileWriter(file));
               writer.print(data);
               writer.close();
            }
         };
      },

      /* folder manipulation code */
      folder: (...nodes) => {
         const stat = core.stat(...nodes);
         const path = stat.path();
         return {
            file: (name) => {
               return core.file(...path, name);
            },
            folder: (...nodes) => {
               return core.folder(...path, ...nodes);
            },
            io: () => {
               return stat.file();
            },
            exists: () => {
               return stat.file().exists();
            },
            make: () => {
               stat.file().exists() || stat.file().mkdir();
               return core.folder(...nodes);
            },
            path: () => {
               return stat.path();
            },
            remove: (parent) => {
               stat.file().exists() && core.clear(stat.file());
               if (parent && stat.file().getParentFile().exists()) {
                  let context = stat.file().getParentFile();
                  while (context.listFiles().length === 0) {
                     context.delete();
                     context = context.getParentFile();
                  }
               }
            }
         };
      },

      /* tab-completion property list helper */
      from: (query, array) => {
         return array.filter((value) => value.includes(query));
      },

      /* better keys grabber */
      keys: (object) => {
         return Object.getOwnPropertyNames(object);
      },

      /* convert string to lowercase */
      lc: (string) => {
         return string.toLowerCase();
      },

      /* constant value for plugin folder */
      root: `${plugin.getDataFolder()}`,

      /* remove circular properties recursively from objects */
      serialize: (object, nullify, nodes) => {
         let output = null;
         if (object && typeof object === 'object') {
            nodes = nodes || [ object ];
            if (typeof object[Symbol.iterator] === 'function') {
               output = [];
               for (let entry of object) {
                  if (nodes.includes(entry)) output.push(nullify ? null : new core.circular());
                  else output.push(core.serialize(entry, nullify, [ ...nodes, entry ]));
               }
            } else {
               output = {};
               for (let entry in object) {
                  if (nodes.includes(object[entry])) output[entry] = nullify ? null : new core.circular();
                  else output[entry] = core.serialize(object[entry], nullify, [ ...nodes, object[entry] ]);
               }
            }
         } else {
            output = object;
         }
         return output;
      },

      /* path info code */
      stat: (...nodes) => {
         const path = java.nio.file.Path.of(...nodes);
         return {
            file: () => {
               return path.toFile();
            },
            path: () => {
               return [ ...`${path}`.replace(/\\/g, '/').split('/') ];
            }
         };
      },

      /* persistent data storage */
      store: (state) => {
         const db = core.store.db || (core.store.db = {});
         return core.traverse(db, core.keys(state), {
            mode: 'object',
            pre: (context, node) => {
               context[node] || (context[node] = state[node]);
            }
         });
      },

      /* send text to player */
      text: (player, message, mode, color) => {
         color !== false && (message = core.color(message));
         switch (mode) {
            case 'action':
               return player.sendActionBar(message);
            case 'title':
               return player.sendTitle(...message.split('\n'));
            default:
               return player.sendMessage(message);
         }
      },

      /* dynamically traverse object along a context path */
      traverse: (context, nodes, options) => {
         options || (options = {});
         for (let node of nodes) {
            options.pre && options.pre(context, node);
            switch (options.mode) {
               case 'string':
                  context = context + node;
                  break;
               case 'array':
                  context.push(node);
                  break;
               case 'object':
                  context = context[node];
                  break;
               case 'function':
                  context = options.next(context, node);
                  break;
            }
            options.post && options.post(context, node);
         }
         return context;
      },

      /* better values grabber */
      values: (object) => {
         return core.keys(object).map((key) => {
            return object[key];
         });
      }
   };

   /* module-related functions */
   const module = {
      /* module getter and updater */
      apply: (source, current) => {
         return new Promise((resolve, reject) => {
            module
               .repo(source.slice(1))
               .then((repo) => {
                  repo
                     .release()
                     .then((latest) => {
                        if (current === latest.data.id) {
                           reject('repository already up to date.');
                        } else {
                           try {
                              core.folder(core.root, 'modules', source).remove(true);
                           } catch (error) {
                              reject('repo folder could not be removed.');
                           }
                           latest
                              .download()
                              .then((download) => {
                                 const target = core.folder(core.root, 'modules', source);
                                 core.ensure(`${target.io().getParentFile().getPath()}`.replace(/\\/g, '/').split('/'));
                                 java.nio.file.Files.move(
                                    download.folder.io().toPath(),
                                    target.io().toPath(),
                                    java.nio.file.StandardCopyOption.REPLACE_EXISTING
                                 );
                                 resolve(latest.data.id);
                              })
                              .catch(() => {
                                 reject('repository extraction failed.');
                              });
                        }
                     })
                     .catch(() => {
                        reject('no releases available in your current release channel.');
                     });
               })
               .catch(() => {
                  reject('invalid repository.');
               });
         });
      },

      /* module cache system */
      cache: { stack: [], data: {} },

      /* module traversal context storage */
      context: [ core.root ],

      /* default module files */
      default: {
         index: 'module.exports = (function () {\n   return {\n      /* exports */\n   }\n})();\n',
         package: '{\n   "main": "./index.js"\n}\n'
      },

      /* module downloader */
      download: (location) => {
         return new Promise((resolve, reject) => {
            core
               .fetch(location)
               .then((output) => {
                  try {
                     let entry = null;
                     let result = null;
                     const stream = new java.util.zip.ZipInputStream(output.stream());
                     const downloads = core.folder(core.root, 'downloads').make();
                     while ((entry = stream.getNextEntry())) {
                        if (entry.isDirectory()) {
                           const folder = downloads.folder(entry.getName()).make();
                           result || (result = folder);
                        } else {
                           const target = new java.io.FileOutputStream(downloads.file(entry.getName()).make().io());
                           stream.transferTo(target);
                           target.close();
                        }
                        stream.closeEntry();
                     }
                     stream.close();
                     resolve({ folder: result });
                  } catch (error) {
                     console.log(error);
                  }
               })
               .catch((reason) => {
                  reject(reason);
               });
         });
      },

      /* module traversal export target */
      exports: {},

      /* make web requests with output suited to module operations */
      fetch: (source) => {
         return new Promise((resolve, reject) => {
            core
               .fetch(source)
               .then((output) => {
                  const data = JSON.parse(output.response());
                  return data.message ? reject(data.message) : resolve(data);
               })
               .catch((reason) => {
                  reject(reason);
               });
         });
      },

      /* standardized module information */
      info: (repo) => {
         if (repo) {
            const source = module.source(repo);
            const folder = core.folder(core.root, 'modules', source);
            const data = JSON.parse(folder.file('package.json').read() || '{}');
            const script = data.main ? folder.file(data.main) : null;
            return {
               data: data,
               folder: folder,
               installed: core.keys(module.list).includes(source),
               js: script ? script.read() : null,
               script: script,
               source: source,
               valid: data.main ? true : false
            };
         } else {
            const trusted = core.keys(module.trusted);
            return core.keys(module.list).map((key) => {
               for (let trustee of trusted) {
                  if (key === module.trusted[trustee]) {
                     return trustee;
                  }
               }
               return key;
            });
         }
      },

      /* persistent list of installed modules */
      list: core.data('grakkit', 'modules', {}),

      /* module parser */
      parse: (code, source) => {
         let result = undefined;
         const context = [ ...module.context ];
         module.context.push(...source.replace(/\\/g, '/').split('/'));
         if (!core.stat(...module.context).file().isDirectory()) module.context.pop();
         try {
            result = core.eval(code);
         } catch (error) {
            console.error(error);
         }
         module.context = context;
         module.exports = {};
         return result;
      },

      /* module release download trigger */
      release: (location) => {
         return new Promise((resolve, reject) => {
            module
               .fetch(location)
               .then((data) => {
                  data = data.filter((release) => release.draft === false);
                  core.options.channel === 'dev' || (data = data.filter((release) => release.prerelease === false));
                  if (data.length) {
                     data = data.slice(-1)[0];
                     resolve({
                        data: data,
                        download: () => {
                           return module.download(data.zipball_url);
                        }
                     });
                  } else {
                     reject();
                  }
               })
               .catch((reason) => {
                  reject(reason);
               });
         });
      },

      /* module repo release trigger */
      repo: (source) => {
         const base = `https://api.github.com/repos/${source}`;
         return new Promise((resolve, reject) => {
            module
               .fetch(base)
               .then((data) => {
                  resolve({
                     data: data,
                     release: () => {
                        return module.release(`${base}/releases`);
                     }
                  });
               })
               .catch((reason) => {
                  reject(reason);
               });
         });
      },

      /* module and local-file require */
      require: (source) => {
         source = core.lc(source);
         if (source.startsWith('./')) {
            const script = core.folder(...module.context).file(source);
            const cache = module.cache;
            const path = script.io().getCanonicalPath();
            if (cache.data[path]) {
               return cache.data[path];
            } else {
               console.log(`evaluating script: ./${path}`);
               cache.data[path] = {};
               if (cache.stack.includes(path)) {
                  return cache.data[path];
               } else {
                  cache.stack.push(path);
                  return Object.assign(cache.data[path], module.parse(script.read(), source));
               }
            }
         } else {
            const info = module.info(source);
            if (info.installed) {
               if (info.valid) {
                  const cache = module.cache;
                  const path = info.script.io().getCanonicalPath();
                  if (cache.data[path]) {
                     return cache.data[path];
                  } else {
                     console.log(`evaluating script: ./${path}`);
                     cache.data[path] = {};
                     if (cache.stack.includes(path)) {
                        return cache.data[path];
                     } else {
                        cache.stack.push(path);
                        return Object.assign(cache.data[path], module.parse(info.js, `modules/${info.source}`));
                     }
                  }
               } else {
                  throw 'That package is invalid!';
               }
            } else {
               throw 'That package does not exist!';
            }
         }
      },

      /* module source formatter */
      source: (repo) => {
         return module.list[repo] ? repo : `${module.trusted[repo] || repo.split('/').slice(-2).join('/')}`;
      },

      /* trusted module list */
      trusted: {}
   };

   /* persistent options storage */
   core.options = core.data('grakkit', 'options');

   /* create exportable index */
   const index = {
      core: core,
      exports: module.exports,
      global: global,
      module: module,
      plugin: plugin,
      require: module.require,
      server: server
   };

   /* export if this code is locally required, else execute refresh-synchronous code */
   if (global.module) global.module.exports = index;
   else {
      /* add command: js */
      core.command({
         name: 'js',
         execute: (player, ...args) => {
            try {
               let output = null;
               const result = core.eval(args.join(' '), player);
               switch (toString.apply(result)) {
                  case '[object Object]':
                     const names = core.keys(result);
                     output = `{ ${names.map((name) => `${name}: ${core.display(result[name])}`).join(', ')} }`;
                     break;
                  case '[object Function]':
                     output = `${result}`.replace(/\r/g, '');
                     break;
                  case '[foreign HostFunction]':
                     let input = args.slice(-1)[0].split('.').slice(-1)[0];
                     input.endsWith(']') && (input = core.eval(input.replace(/.*\[/, '').slice(0, -1)));
                     output = `hostFunction ${input}() { [native code] }`;
                     break;
                  default:
                     output = core.display(result);
                     break;
               }
               core.text(player, `\u00a77${output}`, 'chat', false);
            } catch (error) {
               let type = 'Error';
               let message = `${error}`;
               if (error.stack) {
                  type = error.stack.split('\n')[0].split(' ')[0].slice(0, -1);
                  switch (type) {
                     case 'TypeError':
                        message = error.message.split('\n')[0];
                        break;
                     case 'SyntaxError':
                        message = error.message.split(' ').slice(1).join(' ').split('\n')[0];
                        break;
                  }
               }
               core.text(player, `\u00a7c${type}: ${message}`, 'chat', false);
            }
         },
         tabComplete: (player, ...args) => {
            const input = args.slice(-1)[0];
            const filter = /.*(\!|\^|\&|\*|\(|\-|\+|\=|\[|\{|\||\;|\:|\,|\?|\/)/;
            const nodes = input.replace(filter, '').replace('[').split('.');
            let context = Object.assign({ self: player }, global);
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
               return core
                  .keys(context)
                  .filter((key) => core.lc(key).includes(core.lc(segment)))
                  .map((comp) => (input.match(filter) || [ '' ])[0] + [ ...nodes.slice(0, -1), comp ].join('.'));
            } else {
               return [];
            }
         }
      });

      /* add command: module */
      core.command({
         name: 'module',
         execute: (player, action, repo) => {
            action && (action = core.lc(action));
            repo && (repo = core.lc(repo));
            if (action) {
               if ([ 'add', 'create', 'remove', 'update' ].includes(action)) {
                  if (repo) {
                     if (repo === '*' && [ 'remove', 'update' ].includes(action)) {
                        let index = 0;
                        let info = core.keys(module.list);
                        if (action === 'update') info = info.filter((name) => module.list[name] !== -1);
                        const loop = () => {
                           const source = info[index];
                           ++index;
                           if (source) {
                              switch (action) {
                                 case 'remove':
                                    core.text(player, `&7module $&e ${source}&f deleting...`);
                                    try {
                                       core.folder(core.root, 'modules', source).remove(true);
                                       delete module.list[source];
                                       core.text(player, `&7module $&e ${source}&f deleted.`);
                                    } catch (error) {
                                       core.text(player, `&7module $&e ${source}&c repo folder could not be removed.`);
                                    }
                                    loop();
                                    break;
                                 case 'update':
                                    if (module.list[source] !== -1) {
                                       core.text(player, `&7module $&e ${source}&f updating...`);
                                       module
                                          .apply(source, module.list[source])
                                          .then((data) => {
                                             module.list[source] = data;
                                             core.text(player, `&7module $&e ${source}&f updated.`);
                                             loop();
                                          })
                                          .catch((error) => {
                                             core.text(player, `&7module $&e ${source}&c ${error}`);
                                             loop();
                                          });
                                    } else {
                                       loop();
                                    }
                                    break;
                              }
                           } else if (index < info.length) {
                              loop();
                           } else if (info.length === 0) {
                              core.text(player, `&7module $&c there are no modules to ${action}.`);
                           } else {
                              core.folder(core.root, 'downloads').remove();
                           }
                        };
                        loop();
                     } else {
                        let source = null;
                        let installed = null;
                        repo = repo.replace(/\\/g, '/');
                        switch (action) {
                           case 'add':
                              source = `${module.trusted[repo] || repo.split('/').slice(-2).join('/')}`;
                              installed = core.keys(module.list).includes(source);
                              if (installed) {
                                 core.text(player, `&7module $&e ${source}&c repository already installed.`);
                              } else {
                                 core.text(player, `&7module $&e ${source}&f installing...`);
                                 module
                                    .apply(source)
                                    .then((data) => {
                                       module.list[source] = data;
                                       core.text(player, `&7module $&e ${source}&f installed.`);
                                       core.folder(core.root, 'downloads').remove();
                                    })
                                    .catch((error) => {
                                       core.text(player, `&7module $&e ${source}&c ${error}`);
                                       core.folder(core.root, 'downloads').remove();
                                    });
                              }
                              break;
                           case 'create':
                              source = repo.replace(/.*\//g, '');
                              installed = core.keys(module.list).includes(source);
                              if (installed) {
                                 core.text(player, `&7module $&e ${source}&c repository already installed.`);
                              } else {
                                 core.text(player, `&7module $&e ${source}&f creating...`);
                                 try {
                                    const folder = core.folder(core.root, 'modules', source);
                                    folder.file('index.js').write(module.default.index);
                                    folder.file('package.json').write(module.default.package);
                                    module.list[source] = -1;
                                    core.text(player, `&7module $&e ${source}&f created.`);
                                 } catch (error) {
                                    core.text(player, `&7module $&e ${source}&c repo folder could not be created.`);
                                 }
                              }
                              break;
                           case 'remove':
                              source = module.source(repo);
                              installed = core.keys(module.list).includes(source);
                              if (installed) {
                                 core.text(player, `&7module $&e ${source}&f deleting...`);
                                 try {
                                    core.folder(core.root, 'modules', source).remove(true);
                                    delete module.list[source];
                                    core.text(player, `&7module $&e ${source}&f deleted.`);
                                 } catch (error) {
                                    core.text(player, `&7module $&e ${source}&c repo folder could not be removed.`);
                                 }
                              } else {
                                 core.text(player, `&7module $&e ${source}&c repository not already installed.`);
                              }
                              break;
                           case 'update':
                              source = module.source(repo);
                              installed = core.keys(module.list).includes(source);
                              if (installed) {
                                 if (module.list[source] === -1) {
                                    core.text(player, `&7module $&e ${source}&c cannot update a local module.`);
                                 } else {
                                    core.text(player, `&7module $&e ${source}&f updating...`);
                                    module
                                       .apply(source, module.list[source])
                                       .then((data) => {
                                          module.list[source] = data;
                                          core.text(player, `&7module $&e ${source}&f updated.`);
                                          core.folder(core.root, 'downloads').remove();
                                       })
                                       .catch((error) => {
                                          core.text(player, `&7module $&e ${source}&c ${error}`);
                                          core.folder(core.root, 'downloads').remove();
                                       });
                                 }
                              } else {
                                 core.text(player, `&7module $&e ${source}&c repository not installed.`);
                              }
                              break;
                        }
                     }
                  } else {
                     core.text(player, `&7module $&c no repository specified.`);
                  }
               } else if (action === 'list') {
                  let keys = core.keys(module.list);
                  if (keys.length === 0) {
                     core.text(player, `&7module $&c there are no modules to list.`);
                  } else {
                     core.text(player, `&7module $&f installed modules...`);
                     keys.forEach((key) => core.text(player, `&7module $&e ${key}&f [${module.list[key]}]`));
                  }
               } else if (action === 'channel') {
                  if (repo) {
                     if ([ 'main', 'dev' ].includes(repo)) {
                        core.options.channel = repo;
                        core.text(player, '&7module $&f channel updated.');
                     } else {
                        core.text(player, '&7module $&c invalid channel.');
                     }
                  } else {
                     core.text(player, '&7module $&c no channel specified.');
                  }
               } else {
                  core.text(player, '&7module $&c invalid action.');
               }
            } else {
               core.text(player, '&7module $&c no action specified.');
            }
         },
         tabComplete: (player, action, repo, extra) => {
            action && (action = core.lc(action));
            repo && (repo = core.lc(repo));
            if (extra !== undefined) {
               return [];
            } else if (repo !== undefined) {
               switch (action) {
                  case 'add':
                     return core.from(repo, core.keys(module.trusted));
                  case 'remove':
                  case 'update':
                     let info = core.keys(module.list);
                     if (action === 'update') info = info.filter((name) => module.list[name] !== -1);
                     return [ ...core.from(repo, info), '*' ];
                  case 'channel':
                     return core.from(repo, [ 'main', 'dev' ]);
                  default:
                     return [];
               }
            } else if (action !== undefined) {
               return core.from(action, [ 'add', 'create', 'remove', 'update', 'list', 'channel' ]);
            } else {
               return [];
            }
         }
      });

      /* add command: grakkit */
      core.command({
         name: 'grakkit',
         execute: (player, action, value) => {
            action && (action = core.lc(action));
            value && (value = core.lc(value));
            if (action) {
               switch (action) {
                  case 'update':
                     core.file('plugins/grakkit/index.js').remove();
                     server.reload();
                     core.text(player, '&fGrakkit Updated.');
                     break;
                  case 'auto':
                     if (value) {
                        if ([ 'enable', 'disable' ].includes(value)) {
                           core.options.auto = value[0] === 'e';
                           core.text(player, `&fGrakkit Auto-Updater ${core.options.auto ? 'En' : 'Dis'}abled.`);
                        } else {
                           core.text(player, '&cThat value is invalid!');
                        }
                     } else {
                        core.text(player, '&cYou must specify a value!');
                     }
                     break;
                  default:
                     core.text(player, '&cThat action is invalid!');
                     break;
               }
            } else {
               core.text(player, '&cYou must specify an action!');
            }
         },
         tabComplete: (player, action, value, extra) => {
            action && (action = core.lc(action));
            value && (value = core.lc(value));
            if (extra !== undefined) {
               return [];
            } else if (value !== undefined) {
               if (action === 'auto') {
                  return core.from(value, [ 'enable', 'disable' ]);
               } else {
                  return [];
               }
            } else if (action !== undefined) {
               return core.from(action, [ 'update', 'auto' ]);
            } else {
               return [];
            }
         }
      });

      /* save persistent data and attempt auto-update before plugin is disabled */
      core.event('org.bukkit.event.server.PluginDisableEvent', (event) => {
         if (event.getPlugin() === plugin) {
            core.options.auto && core.file('plugins/grakkit/index.js').remove();
            const store = core.store({ data: {} });
            for (let namespace in store) {
               for (let key in store[namespace]) {
                  const file = core.folder(core.root, 'data', namespace).file(`${key}.json`);
                  file.write(JSON.stringify(core.serialize(store[namespace][key], true)));
               }
            }
         }
      });

      /* update trusted module list */
      module.fetch('https://raw.githubusercontent.com/grakkit/core/master/modules.json').then((data) => {
         module.trusted = data;
      });

      /* append index to global context */
      Object.assign(global, index);

      /* parse scripts folder */
      try {
         const folder = core.folder(core.root, 'scripts').make().io();
         const files = folder.listFiles();
         if (files) {
            for (let index = 0; index < files.length; ++index) {
               const file = files[index];
               if (!file.directory) {
                  const script = core.file(`${file.toPath()}`);
                  console.log(`evaluating script: ./${script.path().join('/')}`);
                  core.eval(script.read());
               }
            }
         }
      } catch (error) {
         console.error(error);
      }
   }
})();
