const chalk = require('chalk');
const log = console.log;

log(chalk.red('app is loading ... (red color)'));

log(chalk.red.bold('app is loading ... (red color bold)'));

log(chalk.bgBlue('app is loading ... (blue background)'));

log(chalk.cyan.bgWhite('app is loading ... (cyan color) + (white background)'));

log(chalk.rgb(255, 136, 0)('app is loading ... (orange color)'));

log(chalk.rgb(255, 136, 0).bgRgb(165,42,42)('app is loading ... (orange color) + (brown background)'));

