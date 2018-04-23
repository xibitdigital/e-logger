'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { NODE_ENV } = process.env;
/* eslint-disable no-console */


const logger = new _winston2.default.Logger();

switch ((NODE_ENV || '').toLowerCase()) {
  case 'production':
    logger.add(_winston2.default.transports.Console, {
      handleExceptions: true,
      exitOnError: false,
      timestamp: true,
      level: 'warn'
    });
    break;
  default:
    logger.add(_winston2.default.transports.Console, {
      colorize: true,
      timestamp: true,
      level: 'info'
    });
    break;
}

console.log = (...args) => logger.info.call(logger, ...args);
console.info = (...args) => logger.info.call(logger, ...args);
console.warn = (...args) => logger.warn.call(logger, ...args);
console.error = (...args) => logger.error.call(logger, ...args);
console.debug = (...args) => logger.debug.call(logger, ...args);
console.profile = (...args) => logger.profile.call(logger, ...args);

exports.default = console;