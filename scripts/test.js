'use strict';
const switchSnapshots = require("./switchSnapshots");
const doneSwitchSnapshots = require("./doneSwitchSnapshots");
const isNative = process.argv.includes("./config/native.jest.config.js");
// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');


const jest = require('jest');
const execSync = require('child_process').execSync;
let argv = process.argv.slice(2);

function isInGitRepository() {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

function isInMercurialRepository() {
  try {
    execSync('hg --cwd . root', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

// Watch unless on CI, in coverage mode, or explicitly running all tests
// if (
//   !process.env.CI &&
//   argv.indexOf('--coverage') === -1 &&
//   argv.indexOf('--watchAll') === -1
// ) {
//   // https://github.com/facebook/create-react-app/issues/5210
//   const hasSourceControl = isInGitRepository() || isInMercurialRepository();
//   argv.push(hasSourceControl ? '--watch' : '--watchAll');
// }
switchSnapshots(isNative);

jest.run(argv).then(() => {
  doneSwitchSnapshots(isNative);
});