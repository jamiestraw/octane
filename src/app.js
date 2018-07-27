#!/usr/bin/env node

const app = require('caporal');
const pjson = require('../package.json');

const startCommand = require('./commands/start');
const loginCommand = require('./commands/login');
const bumpCommand = require('./commands/bump');

const targetArgument = require('./arguments/target');
const intervalArgument = require('./arguments/interval');

const nonHeadlessOption = require('./options/nonHeadless');

app
  // App data
  .version(pjson.version)
  .help(`🎪  Dodgem - ${pjson.description} - v${pjson.version}`)
  // Start command
  .command(startCommand.name, startCommand.description)
  .action(startCommand.action)
  .option(
    nonHeadlessOption.synopsis,
    nonHeadlessOption.description,
    nonHeadlessOption.validator
  )
  // Login command
  .command(loginCommand.name, loginCommand.description)
  .action(loginCommand.action)
  // Bump command
  .command(bumpCommand.name, bumpCommand.description)
  .argument(
    targetArgument.name,
    targetArgument.description,
    targetArgument.validator
  )
  .argument(
    intervalArgument.name,
    intervalArgument.description,
    intervalArgument.validator
  )
  .action(bumpCommand.action);

app.parse(process.argv);
