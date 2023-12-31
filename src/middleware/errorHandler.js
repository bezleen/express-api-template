const { httpStatusCode } = require("../constants");

const notFound = (req, res, next) => {
    const error = new Error(`Route ${req.originalUrl} not found!`)
    res.status(404)
    next(error)
}

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case httpStatusCode.BAD_REQUEST:
            res.json({ code: statusCode, title: "Bad Request", msg: err.message, stackTrace: err.stack });
            break;
        case httpStatusCode.NOT_FOUND:
            res.json({ code: statusCode, title: "Not Found", msg: err.message, stackTrace: err.stack });
            break;
        case httpStatusCode.FORBIDDEN:
            res.json({ code: statusCode, title: "Forbidden", msg: err.message, stackTrace: err.stack });
            break;
        case httpStatusCode.UNAUTHORIZED:
            res.json({ code: statusCode, title: "Unauthorized", msg: err.message, stackTrace: err.stack });
            break;
        case httpStatusCode.INTERNAL_ERROR:
            res.json({ code: statusCode, title: "Internal Server Error", msg: err.message, stackTrace: err.stack });
            break;
        default:
            res.json({ code: statusCode, title: "Internal Server Error", msg: err.message, stackTrace: err.stack });
            break;
    }

};

module.exports = {
    notFound,
    errorHandler
};