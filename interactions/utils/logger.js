// utils/logger.js

const winston = require('winston');

// Define log levels
const logLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6,
    },
    colors: {
        error: 'red',
        warn: 'yellow',
        info: 'green',
        http: 'magenta',
        verbose: 'cyan',
        debug: 'blue',
        silly: 'gray',
    },
};

// Create a new logger instance
const logger = winston.createLogger({
    levels: logLevels.levels,
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple(),
                winston.format.printf(({ level, message, timestamp }) => {
                    return `${timestamp} ${level}: ${message}`;
                })
            ),
            level: 'debug', // Minimum level for console logging
        }),
        new winston.transports.File({
            filename: 'logs/app.log',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            ),
            level: 'info', // Minimum level for file logging
        }),
    ],
});

winston.addColors(logLevels.colors);

// Export logger to use in other files
module.exports = logger;
