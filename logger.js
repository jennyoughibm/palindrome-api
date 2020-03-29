// Import winston library
import winston, {format} from 'winston';
import WinstonCloudWatch from 'winston-cloudwatch';
import expressWinston from 'express-winston';

// Winston Loggers for generic use
// File Logger
export const fileLogger = winston.createLogger({
  format: format.combine(
    format.timestamp(),
    format.splat(),
    format.prettyPrint(),
    format.colorize({all: true})
  ),
  transports: [
    new winston.transports.File({filename: 'allLevel.log'})
  ],
  exceptionHandlers: [
    new winston.transports.File({filename: 'expection.log'})
  ],
  exitOnError: false
});

// Console Logger Level - Info
export const consoleLoggerInfo = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.splat(),
    format.prettyPrint(),
    format.colorize({all: true})
  ),
  transports: [
    new winston.transports.Console()
  ],
  exceptionHandlers: [
    new winston.transports.Console()
  ],
  exitOnError: false
});

// Console Logger Level - Debug
export const consoleLoggerDebug = winston.createLogger({
  level: 'debug',
  format: format.combine(
    format.timestamp(),
    format.splat(),
    format.prettyPrint(),
    format.colorize({all: true})
  ),
  transports: [
    new winston.transports.Console()
  ],
  exceptionHandlers: [
    new winston.transports.Console()
  ],
  exitOnError: false
});

// Console Logger Level - Error
export const consoleLoggerError = winston.createLogger({
  level: 'error',
  format: format.combine(
    format.timestamp(),
    format.splat(),
    format.prettyPrint(),
    format.colorize({all: true})
  ),
  transports: [
    new winston.transports.Console()
  ],
  exceptionHandlers: [
    new winston.transports.Console()
  ],
  exitOnError: false
});

// Console Logger Level - Warning
export const consoleLoggerWarn = winston.createLogger({
  level: 'warn',
  format: format.combine(
    format.timestamp(),
    format.splat(),
    format.prettyPrint(),
    format.colorize({all: true})
  ),
  transports: [
    new winston.transports.Console()
  ],
  exceptionHandlers: [
    new winston.transports.Console()
  ],
  exitOnError: false
});

// AWS CloudWatch Logger
export const cloudWatchLogger = winston.createLogger({
  format: format.combine(
    format.timestamp(),
    format.splat(),
    format.prettyPrint(),
    format.colorize({all: true})
  ),
  transports: [
    new WinstonCloudWatch({
      logGroupName: 'TestLogGroup',
      logStreamName: 'TestLogGroupStream',
      awsRegion: 'eu-west-1',
      uploadRate: 2000,
      retentionInDays: 1
    })
  ],
  exceptionHandlers: [
    new winston.transports.Console()
  ],
  exitOnError: false
});

// Express Winston Middleware Logger
export const middlewareLogger = expressWinston.logger({
  format: format.prettyPrint(),
  colorize: true,
  expressFormat: true,
  requestWhitelist: ['url', 'method', 'httpVersion', 'originalUrl', 'query'],
  transports: [
    new winston.transports.Console()
  ]
});

// Express Winston Middleware Error Logger
export const middlewareErrorLogger = expressWinston.errorLogger({
  format: format.prettyPrint(),
  colorize: true,
  expressFormat: true,
  transports: [
    new winston.transports.Console()
  ]
});
