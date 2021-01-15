const express = require('express')
const app = express()
const mongoose = require('mongoose')
require("dotenv").config();
const cors = require('cors')

const port = process.env.PORT
//const PATH_MONGO = "mongodb+srv://xlavm:0987654321xlavm@heroes-cluster.b2voe.mongodb.net/heroes?retryWrites=true&w=majority"
//const PATH_API_HERO = "/api/v1/hero"

app.use(express.json());
app.use(express.urlencoded({ extended: false, }),);
app.use(cors())

mongoose.connect(process.env.PATH_MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log(err))


app.get('/', (req, res) => {res.send("Welcome to the API Back!")})


const heroRoutes = require('./routes/hero.route')
app.use(process.env.PATH_API_HERO, heroRoutes)

app.listen(port, () => console.log(`Server running in port ${port}`)); 
