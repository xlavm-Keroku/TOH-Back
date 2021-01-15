
var express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
var app = express();

var port = process.env.PORT || 3000;
const mongoURI = 'mongodb+srv://xlavm:0987654321xlavm@heroes-cluster.b2voe.mongodb.net/heroes?retryWrites=true&w=majority';

mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false, }),);
app.use(cors())

const heroRoutes = require('./routes/hero.route')
app.use('/hero', heroRoutes)


app.listen(port, function() {
    console.log('Server is running on port: ' + port);
})

