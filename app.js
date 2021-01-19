const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const notFound = require('./middlewares/notFound')
const errorHandler = require('./middlewares/errorHandler')
const highscoreRoutes = require('./routes/highscore')

const app = express()

//middlewares
app.use(morgan('common'))
app.use(helmet())
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}))
app.use(express.json())

//routes
app.get('/hallOfFame' , highscoreRoutes)
app.get( '/', ( request, response ) => {
  response.json({
    message: "Binvenido al memorice Pokemon"
  })
}) 

//notFound
app.use(notFound)
app.use(errorHandler)

module.exports = app