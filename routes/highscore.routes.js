const { Router } = require('express')
const router = Router()

const {
  getHighscores,
} = require('../controllers/highscore')

router
  .get( '/getHighscores', getHighscores )

module.exports = router