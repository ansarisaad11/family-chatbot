const logger = require("./logger");

const errorHandler = (error, req, res, next) => {
    logger.error(`Error occurred: ${error.message}`);
    return res.status(500).send(error.message)
}

module.exports = errorHandler;