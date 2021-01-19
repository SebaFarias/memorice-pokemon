const { Router } = require('express')
const router = Router()

const {
  getHighscores,
  postHighscore,
} = require('../controllers/highscore')

router
  .get( '/getHighscores', getHighscores )
  .post( '/postHighscore', postHighscore )

module.exports = router