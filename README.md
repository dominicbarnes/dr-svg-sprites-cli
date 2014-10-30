# dr-svg-sprites-cli

A CLI for [dr-svg-sprites](https://github.com/drdk/dr-svg-sprites)

## Install

```
$ npm install -g dr-svg-sprites-cli
```

## Usage

The CLI is intentionally *very* simple right now. After some real-world usage,
I'll start adding frequently-used flags to the CLI. Feel free to open PRs or
issues if you have specific requests.

```

  Usage: cli [options] <spriteElementPath...>

  Options:

    -h, --help            output usage information
    -V, --version         output the version number
    -C, --config <file>   Pass an entire config file (JSON or JS)
    -O, --output <path>   Short-hand for setting all output paths to the same directory
    -c, --css <path>      The CSS output path (aka: options.cssPath)
    -p, --png <path>      The PNG sprite output path (aka: options.pngPath)
    -s, --svg <path>      The SVG sprite output directory (aka: options.spritePath)
    -P, --preview <path>  The preview outputh path (aka: options.previewPath)

```
