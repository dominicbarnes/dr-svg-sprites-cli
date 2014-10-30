#!/usr/bin/env node

// dependencies
var debug = require("debug")("dr-svg-sprites-cli");
var dr = require("dr-svg-sprites");
var extend = require("extend");
var path = require("path");
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
  .option("-O, --output <path>", "Short-hand for setting all output paths to the same directory")
  .option("-c, --css <path>", "The CSS output path (aka: options.cssPath)")
  .option("-p, --png <path>", "The PNG sprite output path (aka: options.pngPath)")
  .option("-s, --svg <path>", "The SVG sprite output directory (aka: options.spritePath)")
  .option("-P, --preview <path>", "The preview outputh path (aka: options.previewPath)")
  .parse(process.argv);

// config
var external = program.config ? require(path.resolve(program.config)) : {};

var config = extend(true, {
  spriteElementPath: program.args.length === 1 ? program.args[0] : program.args,
  spritePath: program.output || program.svg,
  cssPath: program.output || program.css,
  pngPath: program.output || program.png
}, external);

// run
debug("starting dr-svg-sprites", config);
dr(config, function (err) {
  if (err) debug("error encountered", err);
  else     debug("complete!");
});
