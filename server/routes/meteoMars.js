const express = require('express')
const router = express.Router()
const request = require('superagent')


router.get('/', (req, res) => {
  request.get('https://api.maas2.jiinxt.com/')
      .then(ApiRes => {
        res.json([{
          "name": "Mars",
          "weather_condition" : ApiRes.body.atmo_opacity,
          "average_temp" : (ApiRes.body.min_temp + ApiRes.body.max_temp) /2,
          "min_temp" : ApiRes.body.min_temp,
          "max_temp" : ApiRes.body.max_temp
        }])
      })
      .catch(err => {
        console.log(err)
      })
})

 
module.exports = router