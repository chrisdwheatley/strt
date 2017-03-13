# strt

A file watching application restarter for your `npm start` command.

<a href="https://npmjs.com/strt"><img src="https://raw.githubusercontent.com/chrisdwheatley/strt/master/images/strt-example.png" width="50%"></a>

## Features

* __Reliable__ - A development environment matching your production environment by running the same command you do in production (`npm start`).
* __Fast__ - Application restarts are super performant thanks to file watching from [`chokidar`](https://www.npmjs.com/package/chokidar).
* __Simple__ - Offers sensible defaults for node.js applications.
* __Configurable__ - File watch & ignore patterns can be defined as well as being able to amend the command run.

## Usage

`strt` can be installed locally or globally with either [Yarn](https://yarnpkg.com/en/) or [npm](https://www.npmjs.com/).

### Locally

```bash
yarn add strt --dev
npm install strt --dev
```

Once installed locally add a task to `scripts` within your `package.json`;

```json
{
  "main": "index.js",
  "scripts": {
    "dev": "strt",
    "start": "node index.js"
  }
}
```

Now just run;

```
npm run dev
```

To start your application & begin watching for changes.

### Globally

```bash
yarn global add strt
npm install --global strt
```

Once installed globally you can run `strt` on the command line from your application root to start watching for changes.

## Options

```bash
--command (-c) [value] Command to run on file change (defaults to "npm start")

--files   (-f) [value] Glob pattern of files to watch for changes (defaults to ".")

--help    (-h)         Output usage information

--ignore  (-i) [value] Glob pattern of files to ignore (defaults to "node_modules")

--version (-v)         Output the version number
```

## Contributing

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2. Link the package to the global module directory: `npm link`
4. Within the module you want to test your local development instance of `strt`, just link it to the dependencies: `npm link strt`. Your local version of `strt` will now be used.

## License

Released under the MIT license: [opensource.org/licenses/MIT](http://opensource.org/licenses/MIT)
