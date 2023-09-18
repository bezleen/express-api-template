const dummyRouter = require('./dummy')
const {errorHandler, notFound} = require('../middleware/errorHandler')

const initRoutes = (app) => {
    app.use('/v1/api/common', dummyRouter)
    
    app.use(notFound)
    app.use(errorHandler)
}

module.exports = initRoutes