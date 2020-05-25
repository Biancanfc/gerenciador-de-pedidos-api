const mongoose = require('mongoose');
const config = require('../config/config')

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}
const uri = `${config.MONGODB_PROTOCOL}://${config.MONGODB_USER}:${config.MONGODB_PASS}@${config.MONGODB_HOST}:${config.MONGODB_PORT}/${config.MONGODB_DATABASE}?authSource=admin`

module.exports = () => {
    mongoose.connect(uri, options).then(() => {
        console.log('mongo conectado!');
    }).catch(err => {
        console.log(err)
        console.log('mongo não conectado')
    });

    return mongoose.connection;
}