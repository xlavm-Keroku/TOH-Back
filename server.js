
var express = require('express');
var cors = require('cors');
var path = require('path');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
var app = express();

var port = process.env.PORT || 3000;
const mongoURI = 'mongodb+srv://xlavm:0987654321xlavm@heroes-cluster.b2voe.mongodb.net/heroes?retryWrites=true&w=majority';

mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use(bodyParser.json());
app.use(cors());

const heroRoutes = require('./routes/hero.route')
app.use('/hero', heroRoutes)


app.listen(port, function() {
    console.log('Server is running on port: ' + port);
})

