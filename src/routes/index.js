const express = require('express');
const jwtVerify = require('../middleware/jwtAuthentication');
const router = express.Router();

const { healthCheck, dummyGetUser, dummyPostUser, dummyPutUser, dummyDeleteUser } = require("../controllers/index");
// this is for all routes
// router.use(jwtVerify); 

router.route('/debug').get((req, res) => {
    if (true) {
        res.status(400);
        throw new Error("This must be failed!");
    }
    res.status(400).json({ code: 400, msg: "fail" });
});

router.route('/health-check').get(healthCheck);
// this is for a specific route
router.route('/health-check').post(jwtVerify, healthCheck);


router.route('/dummy-user/:id').get(dummyGetUser).put(dummyPutUser).delete(dummyDeleteUser);
router.route('/dummy-user').post(dummyPostUser);
module.exports = router;