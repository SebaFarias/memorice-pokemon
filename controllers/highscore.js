const Highscore = require('../models/highscore')

const highscoreMethods = {
  getHighscores: async ( req, res ) => {
    try{
      const highscores = await Highscore.find()
      if( highscores.length > 0 ){
        res.json({
          status: true,
          message: "Todos los puntajes",
          data: highscores,
        })
      }else{
        res.json({
          message: 'No hay ningún puntaje aún, sube el tuyo',
          data: [],
        })
      }
    }catch(err){
      next(err)
    }
  },
  postHighscore: async ( req, res, next ) => {
    const {
      user,
      size,
      time,
      fails
    } = req.body
    const timeScore = calculateTimeScore( time, size )
    const failsScore = calculateFailsScore( fails, size )
    try{
      const newHighscore = new Highscore({
        user: user,
        size: size,
        time: time,
        fails: fails,
        timeScore: timeScore,
        failsScore: failsScore,
        finalScore: calculateFinalScore( timeScore, failsScore, size ),
      })
      await newHighscore.save()
      res.status(201).json({
        message: "Highscore recived",
        data: newHighscore,
      })
    }
    catch(err){
      next(err)
    }
  }
}
const calculateTimeScore = ( time, size ) => {
  let score = 0
  return score
}
const calculateFailsScore = ( fails, size ) => {
  let score = 0
  return score
}
const calculateFinalScore = ( timeScore, failsScore, size ) => {
  let score = 0
  return score
}


module.exports = highscoreMethods