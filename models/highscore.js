const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const highscoreSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  time: {
    type: Number, //in milliseconds
    required: true,
  },
  fails: {
    type: Number,
    required: true,
  },
  timeScore: Number,
  failsScore: Number,
  finalScore: Number
},{
  timestamps: true,
  versionKey: false,
})

mongoose.model( 'Highscore' , highscoreSchema )