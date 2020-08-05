import { types } from './types';
import { events } from './events';

import { CommandMap, File, Player, Plugin, PluginManager } from './classes';

export interface core {
   /**
    * Creates a function which passes its first argument and itself into the `modifier` and calls this function with the supplied `object`.
    * @example
    * // create sample
    * const sample = { a: { b: 'cccc' }, d: { e: 'ff' }, g: { h: 'iii' } };
    * 
    * // recursively remove all string properties whose length is not equal to 3
    * core.chain(sample, (input, loop) => {
    *    switch (typeof input) {
    *       case 'object':
    *          for (let key in input) loop(input[key]) || delete input[key];
    *          return true;
    *       case 'string':
    *          return input.length === 3;
    *    }
    * });
    * 
    * // outputs: { a: {}, d: {}, g: { h: 'iii' } }
    * console.log(sample);
    */
   chain: (base: any, modifier: (object: any, chain: () => {}) => void) => void;
   /** Registers a custom command to the server with the given options. */
   command: (
      options: {
         name: string;
         error?: string;
         aliases?: string[];
         execute?: (player: Player, ...args: string[]) => void;
         fallback?: string;
         permission?: string;
         tabComplete?: (player: Player, ...args: string[]) => string[];
      }
   ) => void;
   /** The main polyglot context. */
   context: any;
   /** Returns a persistent data object linked to the given path. */
   data: (...path: string[]) => any;
   /** Formats common server error messages */
   error: (error: string) => string;
   /** Evaluates JS code. */
   eval: (code: string) => any;
   event: typeof events.event;
   /** Used by modules to export their code. */
   export: (object: any) => void;
   /** Make a GET request to the given URL. */
   fetch: (
      from: string
   ) => {
      /** Attempts to parse the output content as JSON. */
      json: () => any;
      /** Returns the raw output content. */
      read: () => string;
      /** Returns an input stream for this URL. */
      stream: () => any;
      /** Attempts to parse the output content as a ZIP file and unzip the contents to the given path. */
      unzip: (to: any) => core$file;
   };
   /** Returns an object with various utility methods for operating on the filesystem. */
   file: (...path: string[]) => core$file;
   /** Imports a module, prefixed with `@`, or a file relative to the current origin. */
   import: (source: string) => any;
   /** Initializes the grakkit core. */
   init: () => void;
   /** The server's plugin manager. */
   manager: PluginManager;
   module: {
      /** Performs the given `action` on a module and informs the `player` on the results. */
      action: (player: Player, option: string, key: string) => void;
      /** Downloads and registers a module's latest release to the server. */
      add: (key: string) => void;
      /** Deletes a module from the server. */
      delete: (key: string) => void;
      /** Downloads a module's latest release to the server and returns that release's tag name. */
      download: (key: string) => string;
      /** Returns the info on the latest release of a module. */
      latest: (
         key: string
      ) => {
         name: string;
         zipball_url: string;
         tarball_url: string;
         commit: {
            sha: string;
            url: string;
         };
         node_id: string;
      };
      /** Deletes and unregisters a module from the server. */
      remove: (key: string) => void;
      /** Updates a module if the latest release is not already installed. */
      update: (key: string) => void;
   };
   /** Formats the given object into a pretty-printed string. */
   output: (object: any, nested?: boolean) => string;
   /** The grakkit plugin instance. */
   plugin: Plugin;
   /** Unregisters all event listeners, cancels all tasks, unreferences all global objects, and if `disable` is falsey, re-initializes the grakkit core. */
   refresh: (disable?: boolean) => void;
   /** The command map used to register custom commands. */
   registry: CommandMap;
   /** A file wrapper for this plugin's root folder. */
   root: core$file;
   /** Removes circular references from an object recursively, replacing them with circular markers or `null` if `nullify` is true. */
   serialize: (object: any, nullify: boolean, ...nodes: any[]) => any;
   session: {
      command: any;
      data: any;
      event: any;
      export: { file: ((value: any) => void)[]; module: ((value: any) => void)[] };
      module: any;
      origin: core$file;
   };
   /** Sends a message to the given player in chat, or in the action bar if `action` is true. */
   send: (player: Player, message: string, action: boolean) => void;
   type: typeof types.type;
   /** Attempts to parse the input stream as a ZIP file and unzips the contents to the given path. */
   unzip: (from: File, to: File) => core$file;
   /** A version identifier used for compatibility. */
   version: 'modern' | 'legacy' | 'ancient';
}

type core$file = {
   /** Makes a file at the current path if one does not exist. */
   add: () => core$file;
   /** If the current path is a folder, gets the [index] child within it. */
   children: core$file[];
   /** Makes a folder at the current path if one does not exist. */
   dir: () => core$file;
   /** Whether a file or folder at the current path exists or not. */
   exists: boolean;
   /** Joins the current path and the given sub-path and creates a new file object with that path. */
   file: (...sub: string[]) => core$file;
   /** Recursively removes parent folders, starting from the current file's parent folder, moving upstream until a parent folder is non-empty. */
   flush: () => core$file;
   /** The internal file interface for the current path. */
   io: File;
   /** Attempts to parse the current path as a JSON file. */
   json: () => any;
   /** The name of the file or folder at the current path. */
   name: string;
   /** Attempts to parse the current path as a JS file. */
   parse: () => core$file;
   /** The current path in string form. */
   path: string;
   /** If the current path is a file, returns the raw output content of that file. */
   read: () => string;
   /** Removes the file or folder at the current path, and flushes its parent folders. */
   remove: () => core$file;
   /** Returns an output stream for the file at the current path. */
   stream: () => any;
   /** Moves or copies the file or folder at the current path to another path, and flushes the current path's parent folders. */
   transfer: (to: File, action: 'move' | 'copy') => core$file;
   /** If the current path is a file, writes the given content to that file. */
   write: (content: string) => core$file;
   /** Attempts to parse the current path as a ZIP file and unzip the contents to the given path. */
   unzip: (to: File) => void;
};
