#!/usr/bin/env node

const program = require('commander')
const init = require('../lib/init.js')
program.version(require('../package.json').version)

program.
  command('init <name>').
  description('init project').
  action(name=>{
    init(name)
  // require('../lib/init')
  console.log('完成添加' + name)
})

program.parse(process.argv)