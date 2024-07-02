const chalk = require('chalk');
const logger = require('../logger')('commands:start');
module.exports = function start(config)
{
    logger.highlight('  Starting the app  ');
    logger.debug('Received configuration', config);
    // console.log(chalk.bgCyanBright('    Starting the App    '));
    // console.log(chalk.gray('Recieved configuration in start - '),config);
}