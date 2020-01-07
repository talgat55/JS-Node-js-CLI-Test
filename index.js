#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const app = require('commander');
const figlet = require('figlet');
const path = require('path');
const fs = require('fs');
const fsE = require('fs-extra');

// clear();
//
// console.log(
//     chalk.green(
//         figlet.textSync('LightXDesign CLI', { horizontalLayout: 'full' })
//     )
// );

app
    .version('1.0.0')
    .option('-n, --name [name]', 'The name')
    .action(options => {
       // console.log(options.name, 'The name parsed');

        if (!fs.existsSync(options.name)){
            fs.mkdirSync(options.name);
            // console.log(options.name,  process.cwd());
            fs.chmodSync(process.cwd() + '/'+options.name, '775');
            fsE.copy( __dirname+ '/dir/',process.cwd() +  '/'+options.name+ '/'  , err => {
                if (err) return console.error(err);
                console.log('success!');
            })
        }
    });


app.parse(process.argv);