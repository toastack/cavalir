#!/usr/bin/env node

try {
  new Function('var {a} = {a: 1}')();
} catch (error) {
  console.error('Node does not work.');
  process.exit(1);
}

var path = require('path');
var fs   = require('fs');
const process = require('process')


if (fs.existsSync(path.join(__dirname, '../lib/cavalir'))) {
    require('../lib/cavalir/command')(process.argv);
}else if (fs.existsSync(path.join(process.cwd(), 'node_modules/cavalir/lib/cavalir'))){
    require('node_modules/cavalir/lib/cavalir/command')(process.argv);
}else {
    console.error('module not found! (by the CMD)');
    process.exit(1);
}
