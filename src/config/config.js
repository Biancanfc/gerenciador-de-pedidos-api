require('dotenv/config')

module.exports = {
    MONGODB_HOST:process.env.MONGODB_HOST,
    MONGODB_PROTOCOL:process.env.MONGODB_PROTOCOL,
    MONGODB_PORT:process.env.MONGODB_PORT,
    MONGODB_DATABASE:process.env.MONGODB_DATABASE,
    MONGODB_USER:process.env.MONGODB_USER,
    MONGODB_PASS:process.env.MONGODB_PASS,
    PORT:process.env.PORT
}