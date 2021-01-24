const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')
const highscoreRoutes = require('./routes/highscore.routes')
require('dotenv').config()

const app = express()

//middlewares
app.use(express.urlencoded({extended: true}))
app.use(morgan('common'))
app.use(helmet())
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}))
app.use(express.json())

//routes
app.use('/highscores' , highscoreRoutes)
// app.get( '/', ( request, response ) => {
//   response.json({
//     message: "Binvenido al memorice Pokemon"
//   })
// }) 

//Serve static
if(process.NODE_ENV === 'production'){
  app.use(express.static('../client/dist'))
}

//notFound
app.use(notFound)
app.use(errorHandler)

module.exports = app