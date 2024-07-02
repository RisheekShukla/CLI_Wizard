#!/usr/bin/env node
// console.log('hello tool');
// console.log(process.argv);
const logger = require('../src/logger')('bin');
const arg = require('arg');
const chalk = require('chalk');
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start');
// const pkgUp  = require('pkg-up');
// import arg from 'arg';
// import chalk from 'chalk';
// import { createRequire } from 'module';
// import path from 'path';
// const require = createRequire(import.meta.url);

// const path = require('path');
try
{
    const args=arg({
    '--start':Boolean,
    '--build':Boolean,
});

logger.debug('Recived args',args);

if(args['--start'])
    {
        const config = getConfig();
        start(config);
        // const pkgPath = pkgUp.sync({cwd:process.cwd()});
        // const pkg = require(pkgPath);
        // if (pkg.tool && pkg.tool.port) {
        //     console.log('Found configuration, port:', pkg.tool.port);
        //     // TODO: Use pkg.tool.port for your application logic
        //   } else {
        //     console.log(chalk.yellow('Could not find configuration, using default'));
        //     // TODO: Use default configuration or handle missing configuration case
        //   }
        // // if(pkg.tool)
        // //     {
        // //         console.log('Found configuration',pkg.tool);
        // //     }
        // //     else{
        // //         console.log(chalk.yellow('Could not find configuration, using default'));
        // //     }
        // // const pkg = require('./package.json')
        // // const pkg = require(path.join(process.cwd(),'package.json'))
        // console.log(chalk.bgCyanBright( "Starting The Machine "));
    }
} catch(e){
    logger.warning(e.message);
    // console.log(chalk.yellow(e.message));
    console.log();
    usage();
}

function usage()
{
    console.log(`${chalk.whiteBright('tool [CMD]')}
    ${chalk.greenBright('--start')}\tStarts the App
    ${chalk.greenBright('--build')}\tBuilds the app`);
}