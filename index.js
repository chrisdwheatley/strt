const boxen = require("boxen");
const {bold, dim, yellow} = require("chalk");
const {spawn} = require("child_process");
const {watch} = require("chokidar");
const kill = require("tree-kill");

module.exports = (
  {files = ".", command = "npm start", ignore = "node_modules"}
) => {
  const spawnOpts = {
    shell: true,
    stdio: "inherit"
  };

  const watchOpts = {
    ignored: ignore
  };

  const boxOpts = {
    margin: 1,
    padding: 1,
    borderColor: "yellow"
  };

  const strtName = yellow.bold("strt");
  const ignoreMessage = dim(`(ignoring "${ignore}")`);
  const startMessage = `
${strtName} is now running.

- Watching "${yellow.bold(files)}" for changes ${ignoreMessage}.
- Running command "${yellow.bold(command)}".
  `;

  const restartMessage = `
${strtName} spotted a change, re-running "${yellow.bold(command)}" now.
  `;

  const watcher = watch(files, watchOpts);
  let previousProcess = spawn(command, spawnOpts);

  console.log(boxen(startMessage, boxOpts));

  watcher.on("change", path => {
    kill(previousProcess.pid, "", err => {
      if (err) {
        console.error(err);
      }

      console.log(boxen(restartMessage, boxOpts));
      previousProcess = spawn(command, spawnOpts);
    });
  });
};
