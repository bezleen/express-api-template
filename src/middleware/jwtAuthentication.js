const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const jwtVerify = asyncHandler(async (req, res, next) => {
    let jwtToken;
    let bearToken = req.headers.authorization || req.headers.Authorization;
    if (!bearToken || !bearToken.startsWith('Bearer')) {
        res.status(401);
        throw new Error('Unauthorized');
    }
    jwtToken = bearToken.split(' ')[1];
    jwt.verify(jwtToken, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            res.status(401);
            throw new Error('Unauthorized');
        }
        req.payload = payload;
        next();
    })

});

module.exports = jwtVerify;