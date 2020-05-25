var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/config');

const mongo = require('./database/index');
const mongoConnection = mongo()

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

require('./routes/order')(app)
require('./routes/cost')(app)

mongoConnection
    .on('error', console.log)
    .on('disconnected', mongo)


app.listen(config.PORT);

module.exports = app;