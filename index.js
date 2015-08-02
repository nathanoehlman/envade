#!/usr/bin/env node

var childProcess = require('child_process');
var extend = require('extend');

var args = process.argv.slice(2);
var envs = [];
var command = [];
var inCommand = false;
for (var i = 0; i < args.length; i++) {
  var arg = args[i];
  if (arg === '--') {
    inCommand = true;
    continue;
  } else {
    (inCommand ? command : envs).push(arg);
  }
}

if (!command.length) {
  throw new Error('No command given');
}

var env = {};
envs.forEach(function (envSet) {
  var parts = envSet.split('=');
  if (parts.length !== 2) {
    throw new Error('Misunderstood environment variable given: ' + envSet);
  }
  env[parts[0]] = parts[1];
});

childProcess.spawn(command[0], command.slice(1), {
  env: extend({}, process.env, env),
  stdio: 'inherit',
});