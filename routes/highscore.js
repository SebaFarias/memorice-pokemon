const { Router } = require('express')
const router = Router()
const {
  getHighscores,
} = require('../controllers/highscore')

router
  .get( '/' , getHighscores)

  module.exports = router