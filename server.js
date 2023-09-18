const express = require("express");
const { initMongoDB } = require("./src/extensions");
const errorHandler = require("./src/middleware/errorHandler")
const dotenv = require("dotenv").config();
initMongoDB();
// create app
const app = express();
// config
const port = 5002;
// config: parses json from client
app.use(express.json());
// route define
app.use("/v1/api/common", require("./src/routes/index"));
// middleware
app.use(errorHandler);
// app run
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});