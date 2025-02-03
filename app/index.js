
const express = require("express");
require('dotenv').config();
const cors = require("cors");
const compression = require('compression');
const helmet = require('helmet');
const errorHandler = require("../interactions/utils/errorhandler.js");
const router = require('../interactions/routes/index.js');
const sequelize = require("../config/database.js");
const Samaj = require("../interactions/models/Samaj.js");
const Family = require("../interactions/models/Family.js");
const Member = require("../interactions/models/member");

const app = express()

// middlewares
app.use(cors('*'))
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '2mb' }));

// 


sequelize.sync({ force: false }) // Set `force: true` only in development
    .then(() => console.log("Database & tables created!"))
    .catch(err => console.error("Error syncing database:", err));


// routings
app.use('/', router)
// global error handler
app.use(errorHandler)

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});