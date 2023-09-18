const express = require("express");
const { initMongoDB } = require("./src/extensions");
require("dotenv").config();
const initRoutes = require('./src/routes/index')
initMongoDB();
// create app
const app = express();
// config
const port = process.env.PORT || 5002
// config: parses json from client
app.use(express.json());
// route define
initRoutes(app)
// app run
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});