// @flow
/* eslint-disable no-console */
import winston from 'winston';

const { NODE_ENV } = process.env;

const logger = new winston.Logger();

switch ((NODE_ENV || '').toLowerCase()) {
  case 'production':
    logger.add(winston.transports.Console, {
      handleExceptions: true,
      exitOnError: false,
      timestamp: true,
      level: 'warn',
    });
    break;
  default:
    logger.add(winston.transports.Console, {
      colorize: true,
      timestamp: true,
      level: 'info',
    });
    break;
}

console.log = (...args) => logger.info.call(logger, ...args);
console.info = (...args) => logger.info.call(logger, ...args);
console.warn = (...args) => logger.warn.call(logger, ...args);
console.error = (...args) => logger.error.call(logger, ...args);
console.debug = (...args) => logger.debug.call(logger, ...args);
console.profile = (...args) => logger.profile.call(logger, ...args);

export default console;
