const mongoose = require('mongoose')

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const cluster = process.env.DB_CLUSTER
const database = process.env.DB_NAME
const uri = `mongodb+srv://${user}:${password}@${cluster}.7ucsc.mongodb.net/${database}?retryWrites=true&w=majority`

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect( uri , options)
  .then(() => console.log('Conectado al salón de la fama del Memorice Pokemon'))
  .catch( e => console.error('DB error:', e ))
