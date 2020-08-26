const chalk = require('chalk');
const log = console.log;

log(chalk.red('app is loading (color red)'));

log(chalk.green('app is loading (color green)'));

log(`${chalk.red('app is loading (color red)')} !!!! ${chalk.green('app is loading (color green)')}`);

log(chalk.rgb(255,165,0)('app is loading (color orange)'));

log(chalk.rgb(255,165,0).bold('app is loading (color orange bold)'));

log(chalk.bgBlue('app is loading (blue background)'));

log(chalk.green.bgBlue('app is loading (blue background + green color)'));

log(chalk.green.bgBlue.bold('app is loading (blue background + green color + bold)'));
