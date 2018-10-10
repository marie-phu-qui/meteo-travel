const express = require('express')
const router = express.Router()
const request = require('superagent')


const Earth_API_Key = '6152bcddf46f77b26c8b56a8261d6921'


router.get('/', (req, res) => {
  const user_units = req.param.unit || 'metric'
  const user_city = req.param.city || 'bouffemont'

  request.get(`https://api.openweathermap.org/data/2.5/find?q=`+user_city+`&type=like&units=`+user_units+`&APPID=`+Earth_API_Key)
      .then(ApiRes => {
        res.json([
          {
          "name" : ApiRes.body.list[0].name, 
          "country": ApiRes.body.list[0].sys.country, 
          "temperature": ApiRes.body.list[0].main.temp, 
          "pressure" :ApiRes.body.list[0].main.pressure + 'mb', 
          "humidity" : ApiRes.body.list[0].main.humidity + '%', 
          "weather_condition": ApiRes.body.list[0].weather[0].main
          }
        ])
    })
      .catch(err => {
        console.log(err)
      })
})


  
  
  module.exports = router