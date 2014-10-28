#!/usr/bin/env node

// dependencies
var debug = require("debug")("dr-svg-sprites-cli");
var dr = require("dr-svg-sprites");
var extend = require("extend");
var pkg = require("./package.json");
var program = require("commander");

/**
 * The CLI is intentionally bare atm. For now, I will always encourage using
 * external config, and we'll see what options actually become really common
 * before adding them here.
 *
 * @see https://github.com/drdk/dr-svg-sprites#options
 */
program
  .version(pkg.version)
  .usage("[options] <spriteElementPath...>")
  .option("-C, --config <file>", "Pass an entire config file (JSON or JS)")
  .parse(process.argv);

// config
var external = program.config ? require(program.config) : {};
var config = extend(true, { spriteElementPath: program.args }, external);

// run
debug("starting dr-svg-sprites", config);
dr(config, function (err) {
  if (err) debug("error encountered", err);
  else     debug("complete!");
});
