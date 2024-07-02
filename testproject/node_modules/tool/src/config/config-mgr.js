// const chalk = require('chalk');
const logger = require('../logger')('config:mgr');
// const pkgUp = require('pkg-up');
const {cosmiconfigSync} = require('cosmiconfig');
const schema = require('./schema.json')
const betterAjvErrors = require('better-ajv-errors');
const Ajv = require('ajv');
const ajv = new Ajv({jsonPointers:true});
const configLoader = cosmiconfigSync('tool');

module.exports = function getConfig(){
    const result = configLoader.search(process.cwd());
    // const pkgPath  = pkgUp.sync({cwd:ProcessingInstruction.cwd()});
    // const pkg = require(pkgPath);
    if(!result)
        {
            logger.warning('Could Not found Configuration, using default')
            // console.log(chalk.yellow('Could Not found Configuration, using default '));
            return {port:1234};
        }
        else
        {logger.debug('Found configuration file at:', result.filepath);
            const isValid = ajv.validate(schema,result.config);
            if(!isValid)
                {
                    logger.warning('Invalid configuration was supplied');
                    console.log();
                    // console.log(chalk.yellow('Invalid configuration was supplied'));
                    // console.log(ajv.errors);
                    console.log(betterAjvErrors(schema,result.config,ajv.errors));
                    process.exit(1);
                }
                logger.debug('Found configuration', result.config);
            // console.log('Found configuration',result.config);
            return result.config;
        }
}