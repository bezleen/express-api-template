const mongoose = require("mongoose");

const initMongoDB = async () => {
    try {
        const mdb = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB: ", mdb.connection.host, mdb.connection.name);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
module.exports = { initMongoDB };