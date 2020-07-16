(function () {
   const Bukkit = Java.type('org.bukkit.Bukkit');
   const Command = Java.extend(Java.type('org.bukkit.command.Command'));
   const FileInputStream = Java.type('java.io.FileInputStream');
   const FileOutputStream = Java.type('java.io.FileOutputStream');
   const Files = Java.type('java.nio.file.Files');
   const Listener = Java.extend(Java.type('org.bukkit.event.Listener'), {});
   const Paths = Java.type('java.nio.file.Paths');
   const Scanner = Java.type('java.util.Scanner');
   const Source = Java.type('org.graalvm.polyglot.Source');
   const StandardCopyOption = Java.type('java.nio.file.StandardCopyOption');
   const URL = Java.type('java.net.URL');
   const ZipInputStream = Java.type('java.util.zip.ZipInputStream');

   let version = 'modern';
   let ChatMessageType, EventPriority, EventType, TextComponent;

   try {
      ChatMessageType = Java.type('net.md_5.bungee.api.ChatMessageType');
      TextComponent = Java.type('net.md_5.bungee.api.chat.TextComponent');
   } catch (error) {
      version = 'legacy';
   }

   try {
      EventPriority = Java.type('org.bukkit.event.EventPriority');
   } catch (error) {
      EventType = Java.type('org.bukkit.event.Event$Type');
      EventPriority = Java.type('org.bukkit.event.Event$Priority');
      version = 'ancient';
   }

   const global = globalThis;
   const server = Bukkit.getServer();

   const manager = server.getPluginManager();
   const plugin = manager.getPlugin('grakkit');
   const context = plugin.getClass().static.context;

   const commandMap = server.getClass().getDeclaredField('commandMap');
   commandMap.setAccessible(true);
   const registry = commandMap.get(server);

   const circular = function () {};
   let trusted = [];

   /**
    * @type {{
    *    chain: core$chain,
    *    command: core$command,
    *    context: any,
    *    data: core$data,
    *    error: core$error,
    *    eval: core$eval,
    *    event: core$event,
    *    export: core$export,
    *    fetch: core$fetch,
    *    file: core$file,
    *    import: core$import,
    *    js: core$js,
    *    manager: any,
    *    module: core$module,
    *    output: core$output,
    *    plugin: any,
    *    registry: any,
    *    root: core$file$,
    *    send: core$send,
    *    serialize: core$serialize,
    *    session: core$session,
    *    unzip: core$unzip
    * }}
    */
   const core = {
      /**
       * @callback core$chain
       * @param {any} base
       * @param {function} modifier
       * @returns {void}
       */
      chain: (base, modifier) => {
         const chain = (object) => modifier(object, chain);
         chain(base);
      },
      /**
       * @callback core$command$execute
       * @param {any} player
       * @param {...string} args
       * @returns {void}
       */
      /**
       * @callback core$comamnd$tabComplete
       * @param {any} player
       * @param {...string} args
       * @returns {string[]}
       */
      /**
       * @callback core$command
       * @param {{
       *    name: string,
       *    error?: string,
       *    aliases?: string[],
       *    execute: core$command$execute,
       *    fallback?: string,
       *    permission?: string,
       *    tabComplete: core$comamnd$tabComplete
       * }} options
       * @returns {void}
       */
      command: (options) => {
         core.session.command[options.name] = { execute: options.execute, tabComplete: options.tabComplete };
         if (!registry.getCommand(options.name)) {
            const command = new Command(options.name, {
               execute: (player, name, args) => {
                  if (options.permission && !player.hasPermission(options.permission)) {
                     options.error && player.sendMessage(options.error);
                     return false;
                  } else {
                     try {
                        (core.session.command[options.name].execute || (() => {}))(player, ...args);
                        return true;
                     } catch (error) {
                        console.error(`An error occured while attempting to execute the "${name}" command!`);
                        console.error(error.stack || error.message || error);
                        return false;
                     }
                  }
               },
               tabComplete: (player, name, args) => {
                  try {
                     const results = (core.session.command[options.name].tabComplete || (() => {}))(player, ...args);
                     if (!results) {
                        return [];
                     } else if (typeof results === 'string') {
                        return [ results ];
                     } else if (typeof results[Symbol.iterator] === 'function') {
                        return [ ...results ];
                     } else {
                        return [];
                     }
                  } catch (error) {
                     console.error(`An error occured while attempting to tab-complete the "${name}" command!`);
                     console.error(error.stack || error.message || error);
                     return [];
                  }
               }
            });
            options.error && command.setPermissionMessage(options.error);
            options.aliases && command.setAliases([ ...options.aliases ]);
            options.permission && command.setPermission(options.permission);
            registry.register(options.fallback || 'grakkit', command);
         }
      },
      /**
       * @callback core$data
       * @param {...string} path
       * @returns {any}
       */
      data: (...path) => {
         const name = Paths.get(...path).normalize().toString();
         const store = core.session.data;
         store[name] || (store[name] = core.root.file('data', `${path}.json`).json() || {});
         return store[name];
      },
      /**
       * @callback core$error
       * @param {string} error
       * @returns {string}
       */
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
      /**
       * @callback core$eval
       * @param {string} code
       * @returns {any}
       */
      eval: (code) => {
         return Polyglot.eval('js', code);
      },
      /**
       * @callback core$event
       * @param {string} name
       * @param {...function} listeners
       * @returns {void}
       */
      event: (name, ...listeners) => {
         const store = core.session.event[name] || (core.session.event[name] = []);
         listeners.forEach((listener) => {
            if (store.push(listener) === 1) {
               if (version === 'ancient') {
                  manager.registerEvent(
                     EventType[name],
                     new Listener(),
                     (info, event) => store.forEach((listener) => listener(event)),
                     EventPriority.Highest,
                     plugin
                  );
               } else {
                  manager.registerEvent(
                     Java.type(name).class,
                     new Listener(),
                     EventPriority.HIGHEST,
                     (info, event) => store.forEach((listener) => listener(event)),
                     plugin
                  );
               }
            }
         });
      },
      /**
       * @callback core$export
       * @param {any} object
       * @returns {void}
       */
      export: (object) => {
         (core.session.export.slice(-1)[0] || (() => {}))(object);
      },
      /**
       * @callback core$fetch$json
       * @returns {any}
       */
      /**
       * @callback core$fetch$read
       * @returns {string}
       */
      /**
       * @callback core$fetch$stream
       * @returns {any}
       */
      /**
       * @callback core$fetch$unzip
       * @param {any} to
       * @returns {core$file$}
       */
      /**
       * @callback core$fetch
       * @param {string} from
       * @returns {{
       *    json: core$fetch$json,
       *    read: core$fetch$read,
       *    stream: core$fetch$stream,
       *    unzip: core$fetch$unzip
       * }}
       */
      fetch: (from) => {
         const link = new URL(from).openConnection();
         link.setDoOutput(true);
         link.setRequestMethod('GET');
         link.setInstanceFollowRedirects(true);
         const code = link.getResponseCode();
         if (code === 200) {
            return {
               json: () => {
                  try {
                     return JSON.parse(new Scanner(link.getInputStream()).useDelimiter('\\A').next());
                  } catch (error) {
                     return null;
                  }
               },
               read: () => {
                  return new Scanner(link.getInputStream()).useDelimiter('\\A').next();
               },
               stream: () => {
                  return link.getInputStream();
               },
               unzip: (to) => {
                  return core.unzip(link.getInputStream(), to);
               }
            };
         } else {
            throw code;
         }
      },
      /**
       * @callback core$file$add
       * @returns {core$file$}
       */
      /**
       * @callback core$file$child
       * @param {number} index
       * @returns {core$file$}
       */
      /**
       * @callback core$file$dir
       * @returns {core$file$}
       */
      /**
       * @callback core$file$file
       * @param {...string} sub
       * @returns {core$file$}
       */
      /**
       * @callback core$file$flush
       * @returns {core$file$}
       */
      /**
       * @callback core$file$json
       * @returns {any}
       */
      /**
       * @callback core$file$parse
       * @returns {core$file$}
       */
      /**
       * @callback core$file$remove
       * @returns {core$file$}
       */
      /**
       * @callback core$file$stream
       * @returns {any}
       */
      /**
       * @callback core$file$transfer
       * @param {any} to
       * @param {string} action
       * @returns {core$file$}
       */
      /**
       * @callback core$file$write
       * @param {string} content
       * @returns {core$file$}
       */
      /**
       * @callback core$file$unzip
       * @param {any} to
       * @returns {core$file$}
       */
      /**
       * @typedef {{
       *    add: core$file$add,
       *    child: core$file$child,
       *    dir: core$file$dir,
       *    exists: boolean,
       *    file: core$file$file,
       *    flush: core$file$flush,
       *    io: any,
       *    json: core$file$json,
       *    parse: core$file$parse,
       *    read: core$file$read,
       *    remove: core$file$remove,
       *    stream: core$file$stream,
       *    transfer: core$file$transfer,
       *    write: core$file$write,
       *    unzip: core$file$unzip
       * }} core$file$
       */
      /**
       * @callback core$file
       * @param {...string} path
       * @returns {core$file$}
       */
      file: (...path) => {
         const io = Paths.get(...path).normalize().toFile();
         const thing = {
            add: () => {
               thing.file('..').dir();
               io.createNewFile();
               return thing;
            },
            child: (index) => {
               return io.listFiles()[index] ? core.file(io.listFiles()[index].getPath()) : null;
            },
            dir: () => {
               core.chain(io, (io, loop) => {
                  const up = io.getParentFile();
                  up && !up.exists() && loop(up);
                  io.mkdir();
               });
               return thing;
            },
            get exists () {
               return io.exists();
            },
            file: (...sub) => {
               return core.file(...path, ...sub);
            },
            flush: () => {
               core.chain(io, (io, loop) => {
                  const up = io.getParentFile();
                  up && up.listFiles() && !up.listFiles()[0] && up.delete() && loop(up);
               });
               return thing;
            },
            get io () {
               return io;
            },
            json: () => {
               try {
                  return JSON.parse(thing.read());
               } catch (error) {
                  return null;
               }
            },
            parse: () => {
               io.exists() &&
                  context.eval(
                     Source.newBuilder('js', io).mimeType('application/javascript+module').cached(false).build()
                  );
               return thing;
            },
            read: () => {
               return io.exists() && !io.isDirectory() ? Files.readString(io.toPath()) : null;
            },
            remove: () => {
               core.chain(io, (io, loop) => {
                  io.isDirectory() && [ ...io.listFiles() ].forEach(loop);
                  io.exists() && io.delete();
               });
               return thing.flush();
            },
            stream: () => {
               return new FileOutputStream(io);
            },
            transfer: (to, action) => {
               core.chain([ io, to ], (io, loop) => {
                  if (io[0].isDirectory()) {
                     core.file(io[1].getPath()).dir();
                     [ ...io[0].listFiles() ].forEach((from) => {
                        loop([ from, core.file(io[1].getPath(), from.getName()).io ]);
                     });
                  } else if (io[0].exists() && !io[1].exists()) {
                     Files[action](io[0].toPath(), io[1].toPath(), StandardCopyOption.REPLACE_EXISTING);
                  }
               });
               return thing.flush();
            },
            write: (content) => {
               io.exists() && !io.isDirectory() && Files.writeString(io.toPath(), content);
               return thing;
            },
            unzip: (to) => {
               core.unzip(new FileInputStream(io), to);
            }
         };
         return thing;
      },
      import: (key) => {
         if (core.session.module[key]) {
            return core.session.module[key];
         } else {
            const folder = core.root.file('modules', key);
            let info;
            try {
               info = folder.file('package.json').json() || {};
            } catch (error) {
               info = {};
            }
            let output;
            core.session.export.push((value) => (output = value));
            try {
               folder.file(info.main || 'index.js').parse();
               core.session.export.pop();
               return output;
            } catch (error) {
               core.session.export.pop();
               console.error(`An error occured while attempting to evaluate the "${key}" module!`);
               throw error;
            }
         }
      },
      get manager () {
         return manager;
      },
      /**
       * @callback core$module$action
       * @param {any} player
       * @param {string} option
       * @param {string} key
       * @returns {void}
       */
      /**
       * @callback core$module$add
       * @param {string} key
       * @returns {void}
       */
      /**
       * @callback core$module$download
       * @param {string} key
       * @returns {string}
       */
      /**
       * @callback core$module$delete
       * @param {string} key
       * @returns {void}
       */
      /**
       * @callback core$module$latest
       * @param {string} key
       * @returns {{
       *    name: string,
       *    zipball_url: string,
       *    tarball_url: string,
       *    commit: {
       *       sha: string,
       *       url: string
       *    },
       *    node_id: string
       * }}
       */
      /**
       * @callback core$module$remove
       * @param {string} key
       * @returns {void}
       */
      /**
       * @typedef {{
       *    action: core$module$action,
       *    add: core$module$add,
       *    delete: core$module$delete,
       *    download: core$module$download,
       *    latest: core$module$latest,
       *    list: core$module$list,
       *    remove: core$module$remove
       * }} core$module
       */
      module: {
         action: (player, option, key) => {
            key = key.toLowerCase();
            const action = { add: 'Install', remove: 'Delet', update: 'Updat' }[option];
            try {
               core.send(player, `§7${action}ing... (${key})`);
               core.module[option](key);
               core.send(player, `§7Module ${action}ed. (${key})`);
            } catch (error) {
               switch (error) {
                  case 'module-already-installed':
                     core.send(player, '§cThat module has already been installed!');
                     break;
                  case 'module-already-updated':
                     core.send(player, '§cThat module is already up to date!');
                     break;
                  case 'module-download-failed':
                     core.send(player, '§cAn error occured while downloading that module!');
                     break;
                  case 'module-not-available':
                     core.send(player, '§cThat module has no releases available!');
                     break;
                  case 'module-not-installed':
                     core.send(player, '§cThat module has not already been installed!');
                     break;
                  default:
                     core.send(player, '§cAn unexpected error occured!');
                     console.error(error.stack || error);
                     break;
               }
            }
         },
         add: (key) => {
            if (core.module.list[key]) {
               throw 'module-already-installed';
            } else {
               core.module.list[key] = core.module.download(key);
            }
         },
         download: (key) => {
            const latest = core.module.latest(key);
            if (latest) {
               if (core.module.list[key] === latest.name) {
                  throw 'module-already-updated';
               } else {
                  try {
                     const from = core.fetch(latest.zipball_url).unzip(core.root.file('downloads', key).io);
                     from.child(0).transfer(core.root.file('modules', key).io, 'move').remove();
                     return latest.name;
                  } catch (error) {
                     core.root.file('downloads', key).remove();
                     console.error(`An error occured while attempting to download the "${key}" repository!`);
                     console.error(error.stack || error);
                     throw 'module-download-failed';
                  }
               }
            } else {
               throw 'module-not-available';
            }
         },
         delete: (key) => {
            core.root.file('modules', key).remove();
         },
         latest: (key) => {
            return core.fetch(`https://api.github.com/repos/${key}/tags`).json()[0];
         },
         get list () {
            return core.data('../modules');
         },
         remove: (key) => {
            if (core.module.list[key]) {
               core.module.delete(key);
               delete core.module.list[key];
            } else {
               throw 'module-not-installed';
            }
         },
         update: (key) => {
            if (core.module.list[key]) {
               core.module.list[key] = core.module.download(key);
            } else {
               throw 'module-not-installed';
            }
         }
      },
      /**
       * @callback core$output
       * @param {any} object
       * @param {boolean} [nested]
       * @returns {string}
       */
      output: (object, nested) => {
         if (nested) {
            if (object && object.constructor === circular) {
               return 'Circular';
            } else {
               const type = toString.apply(object);
               switch (type) {
                  case '[object Object]':
                  case '[object Function]':
                  case '[foreign HostFunction]':
                     return type.split(' ')[1].slice(0, -1);
                  case '[object Array]':
                     return `[ ${core.serialize(object).map(core.output, true).join(', ')} ]`;
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
         } else {
            if (![ null, undefined ].includes(object) && typeof object[''] === 'string') {
               return object[''];
            } else {
               switch (toString.apply(object)) {
                  case '[object Object]':
                     const names = Object.getOwnPropertyNames(object);
                     return `{ ${names.map((name) => `${name}: ${core.output(object[name], true)}`).join(', ')} }`;
                  case '[object Function]':
                     return `${object}`.replace(/\r/g, '');
                  case '[foreign HostFunction]':
                     let input = args.slice(-1)[0].split('.').slice(-1)[0];
                     input.endsWith(']') && (input = eval(input.replace(/.*\[/, '').slice(0, -1)));
                     return `hostFunction ${input.split(/[|;]/g)[0]}() { [native code] }`;
                  default:
                     return core.output(object, true);
               }
            }
         }
      },
      get plugin () {
         return plugin;
      },
      get registry () {
         return registry;
      },
      get root () {
         return core.file(core.plugin.getDataFolder().getPath().replace(/[\\]/g, '/'));
      },
      /**
       * @callback core$serialize
       * @param {any} object
       * @param {boolean} [nullify]
       * @param {any[]} [nodes]
       */
      serialize: (object, nullify, nodes) => {
         if (object === null || object !== 'object') {
            return object;
         } else {
            nodes || (nodes = [ object ]);
            let output = typeof object[Symbol.iterator] === 'function' ? [] : {};
            Object.keys(object).map((key) => {
               const value = object[key];
               if (nodes.includes(value)) output[key] = nullify ? null : new circular();
               else output[key] = core.serialize(value, nullify, [ ...nodes, object ]);
            });
            return output;
         }
      },
      /**
       * @callback core$session$export
       * @param {any} value
       * @returns {void}
       */
      /**
       * @typedef {{
       *    command: any,
       *    data: any,
       *    event: any,
       *    export: core$session$export[],
       *    module: any
       * }} core$session
       */
      session: { command: {}, data: {}, event: {}, export: [], module: {} },
      /**
       * @callback core$send
       * @param {any} player
       * @param {string} message
       * @param {boolean} [action]
       * @returns {core$file$}
       */
      send: (player, message, action) => {
         const limit = action ? 128 : 2048;
         message.length > limit && (message = `${message.slice(0, limit - 3)}...`);
         if (action) version === 'modern' && player.sendMessage(ChatMessageType.ACTION_BAR, new TextComponent(message));
         else player.sendMessage(message);
      },
      /**
       * @callback core$unzip
       * @param {any} from
       * @param {any} to
       * @returns {core$file$}
       */
      unzip: (from, to) => {
         const stream = new ZipInputStream(from);
         try {
            let entry;
            while ((entry = stream.getNextEntry())) {
               const file = core.file(to.getPath(), entry.getName());
               if (entry.isDirectory()) {
                  file.dir();
               } else {
                  const output = file.add().stream();
                  try {
                     stream.transferTo(output);
                     output.close();
                  } catch (error) {
                     output.close();
                     throw error;
                  }
               }
               stream.closeEntry();
            }
            stream.close();
            from.close();
            return core.file(to.getPath());
         } catch (error) {
            stream.close();
            from.close();
            throw error;
         }
      },
      get version () {
         return version;
      }
   };

   Object.assign(global, { core: core, global: global, server: server });

   core.command({
      name: 'js',
      permission: 'grakkit.command.js',
      error: '§cYou lack the permission §4(grakkit.command.js) §cto use that command!',
      execute: (player, ...args) => {
         const self = global.hasOwnProperty('self');
         try {
            self || (global.self = player);
            const result = core.eval(args.join(' '));
            self || delete global.self;
            core.send(player, `§7${core.output(result)}`);
         } catch (error) {
            self || delete global.self;
            core.send(player, `§c${core.error(error)}`);
         }
      },
      tabComplete: (player, ...args) => {
         const input = args.slice(-1)[0];
         const single = /(\!|\^|\&|\*|\(|\-|\+|\=|\{|\||\;|\:|\,|\?|\/)/;
         const filter = /.*(\!|\^|\)|\&|\*|\(|\-|\+|\=|\{|\||\;|\:|\,|\?|\/)/;
         let index = 0;
         let string = null;
         let nodes = input;
         while (index < input.length) {
            const char = input[index];
            if (char === string) string = null;
            else if ([ "'", '"', '`' ].includes(char)) string = char;
            else if (!string && single.test(char)) nodes = input.slice(index + 1);
            ++index;
         }
         index = 0;
         nodes = nodes.replace(/(\[)|(\]\.)/g, '.').split('.');
         let context = global;
         while (index < nodes.length - 1) {
            let node = nodes[index++];
            [ "'", '"', '`' ].includes(node[0]) && (node = node.slice(1, -1));
            node.length && node[0].match(/[0-9]/g) && (node = Number(node));
            if (context[node]) context = context[node];
            else if (context === global && node === 'self') context = player;
            else index = Infinity;
         }
         if (index === nodes.length - 1) {
            const base = (input.match(filter) || [ '' ])[0] + input.replace(filter, '');
            let segment = nodes.slice(-1)[0];
            [ "'", '"', '`' ].includes(segment[0]) && (segment = segment.slice(1, -1));
            const properties = Object.getOwnPropertyNames(context);
            if (context === global && !properties.includes('self')) properties.push('self');
            if (typeof context.length === 'number' && [ 'object', 'function' ].includes(typeof context[0])) {
               properties.push(...Array(context.length).join(' ').split(' ').map((value, index) => `${index}`));
            }
            return properties
               .filter((key) => key.toLowerCase().includes(segment.toLowerCase()))
               .map((key) => {
                  let property = '';
                  if (key.length && key[0].match(/[0-9]/g)) property = `[${key}]`;
                  else if (key.match(/[^0-9A-Za-z|\_|\$]/g)) return null;
                  else property = `.${key}`;
                  const path = base.split(property[0]);
                  const name = property.slice(1);
                  if (!base || !base.match(/[\.\[]/g)) return base.split(single).slice(0, -1).join('') + name;
                  else if (context === global) return base + name;
                  else if (name.includes(path.slice(-1)[0])) return path.slice(0, -1).join(property[0]) + property;
               })
               .filter((property) => property);
         }
      }
   });

   core.command({
      name: 'module',
      permission: 'grakkit.command.module',
      error: '§cYou lack the permission §4(grakkit.command.module) §cto use that command!',
      execute: (player, option, key) => {
         if (option) {
            option = option.toLowerCase();
            if (option === 'list') {
               core.send(player, `§7Installed modules: ${core.output(Object.keys(core.module.list))}`);
            } else if ([ 'add', 'remove', 'update' ].includes(option)) {
               if (key === '*') {
                  if (option === 'add') {
                     core.send(player, '§7One sec, just need to download the entire GitHub database...');
                  } else {
                     Object.keys(core.module.list).map((key) => core.module.action(player, option, key));
                  }
               } else if (key) {
                  core.module.action(player, option, key.toLowerCase());
               } else {
                  core.send(player, '§cYou must specify a repository!');
               }
            } else {
               core.send(player, '§cThat option is invalid!');
            }
         } else {
            core.send(player, '§cYou must specify an option!');
         }
      },
      tabComplete: (player, ...args) => {
         switch (args.length) {
            case 1:
               return [ 'add', 'list', 'remove', 'update' ].filter((value) => value.includes(args[0]));
            case 2:
               switch (args[0]) {
                  case 'add':
                     return trusted.filter((value) => value.includes(args[1]));
                  case 'remove':
                  case 'update':
                     return [ '*', ...Object.keys(core.module.list).filter((value) => value.includes(args[1])) ];
               }
         }
      }
   });

   core.command({
      name: 'refresh',
      permission: 'grakkit.command.refresh',
      error: '§cYou lack the permission §4(grakkit.command.refresh) §cto use that command!',
      execute: (player) => {
         core.send(player, '§7Refreshing...');
         manager.disablePlugin(plugin);
         manager.enablePlugin(plugin);
         core.send(player, '§7Refresh Complete.');
      }
   });

   core.event(version === 'modern' ? 'org.bukkit.event.server.PluginDisableEvent' : 'PLUGIN_DISABLE', (event) => {
      if (plugin === event.getPlugin()) {
         Object.keys(core.session.data).forEach((path) => {
            const data = JSON.stringify(core.serialize(core.session.data[path], true));
            core.root.file('data', `${path}.json`).add().write(data);
         });
      }
   });

   try {
      trusted = core.fetch('https://raw.githubusercontent.com/grakkit/core/master/modules.json').json();
   } catch (error) {
      console.error('An error occured while attempting to download the official module list!');
      trusted = [];
   }

   core.root.file('user.js').add().parse();
})();
