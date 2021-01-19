const Highscore = require('../models/highscore')

const highscoreMethods = {
  getHighscores: ( req, res ) => {
    console.log('we got here')
    res.json({
      msg: 'almost working',
    })
  },
}

module.exports = highscoreMethods