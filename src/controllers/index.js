const asyncHandler = require('express-async-handler');
const DummyUser = require('../models/dummyUser');
const mongoose = require('mongoose');


//@desc Health check for api service
//@route GET /health-check
//@access public
const healthCheck = asyncHandler(async (req, res) => {
    let params = req.params;
    let body = req.body;
    let { foo } = req.body;
    console.log(`params:`, params);
    console.log(`body:`, body);
    console.log(`foo:`, foo);
    res.status(200).json({ code: 200, msg: "success" });
});

//@desc Dummy api for using db service
//@route GET /dummy-user
//@access public
const dummyGetUser = asyncHandler(async (req, res) => {
    const user = await DummyUser.findById(req.params.id);
    console.log(`user:`, user);
    if (!user) {
        throw new Error("No such user!");
    }
    res.status(200).json({ code: 200, msg: "success", data: user });
});

//@desc Dummy api for using db service
//@route POST /dummy-user
//@access public
const dummyPostUser = asyncHandler(async (req, res) => {
    let { name, email, address } = req.body;
    if (!name || !email || !address) {
        throw new Error('Missing required parameter');
    }
    const user = await DummyUser.create({
        name, email, address
    });
    res.status(200).json({ code: 200, msg: "success", data: user });
});

//@desc Dummy api for using db service
//@route PUT /dummy-user
//@access public
const dummyPutUser = asyncHandler(async (req, res) => {
    let id = req.params.id;
    if (!id) {
        throw new Error('Missing required parameter');
    }
    const updateUser = await DummyUser.findByIdAndUpdate(id, {
        $set: {
            name: "update2"
        }
    }, { new: true })
    res.status(200).json({ code: 200, msg: "success", data: updateUser });
});

//@desc Dummy api for using db service
//@route DELETE /dummy-user
//@access public
const dummyDeleteUser = asyncHandler(async (req, res) => {
    let isHardDelete = Boolean(parseInt(req.query.hard));
    console.log(isHardDelete);
    let id = req.params.id;
    if (!id) {
        throw new Error('Missing required parameter');
    }
    if (isHardDelete) {
        console.log("Deleted")
    }
    else {
        await DummyUser.updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: { "status": "invalid" } });
    }
    res.status(200).json({ code: 200, msg: "success", data: {} });
});

module.exports = { healthCheck, dummyGetUser, dummyPostUser, dummyPutUser, dummyDeleteUser };


