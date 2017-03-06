const {spawn} = require("child_process");
const boxen = require("boxen");
const {bold, dim, yellow} = require("chalk");
const {watch} = require("chokidar");

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
    console.log(boxen(restartMessage, boxOpts));

    previousProcess.kill();
    previousProcess = spawn(command, spawnOpts);
  });
};
