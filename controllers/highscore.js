const Highscore = require('../models/highscore')

const highscoreMethods = {
  getHighscores: ( req, res ) => {
    res.json({
      message: 'all working',
    })
  },
}

module.exports = highscoreMethods