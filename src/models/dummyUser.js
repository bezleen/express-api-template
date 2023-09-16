const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Missing required"]
    },
    email: {
        type: String,
        required: [true, "Missing required"]
    },
    address: {
        type: String,
        required: [true, "Missing required"]
    },
    status: {
        type: String,
        default: "valid"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("DummyUser", userSchema);