const chalk = require('chalk');

module.exports = function createLogger(name)
{
    return {
        log:(...args) => console.log(chalk.gray(...args)),
        warning: (...args) => console.log(chalk.yellow(...args)),
        highlight: (...args) => console.log(chalk.bgCyanBright(...args)),
        debug: debug(name)
    };
}