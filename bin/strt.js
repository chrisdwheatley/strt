#!/usr/bin/env node
const args = require("args");

args
  .option(["c", "command"], "Command to run on file change", "npm start")
  .option(["f", "files"], "Glob pattern of files to watch for changes", ".")
  .option(["i", "ignore"], "Glob pattern of files to ignore", "node_modules");

require("../index")({command, files, ignore} = args.parse(process.argv));
