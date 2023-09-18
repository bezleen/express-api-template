const express = require('express');
const jwtVerify = require('../middleware/jwtAuthentication');
const router = express.Router();

const { healthCheck, dummyGetUser, dummyPostUser, dummyPutUser, dummyDeleteUser } = require("../controllers/index");
// this is for all routes
// router.use(jwtVerify); 

// router.route('/debug').get((req, res) => {
//     if (true) {
//         res.status(400);
//         throw new Error("This must be failed!");
//     }
//     res.status(400).json({ code: 400, msg: "fail" });
// });

router.get('/health-check', healthCheck);
// this is for a specific route
router.post('/health-check', [jwtVerify], healthCheck)
router.get('/dummy-user/:id', dummyGetUser)
router.put('/dummy-user/:id', dummyGetUser)
router.delete('/dummy-user/:id', dummyGetUser)
router.post('/dummy-user', dummyPostUser)

module.exports = router;