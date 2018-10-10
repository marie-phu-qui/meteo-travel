const express = require('express')
const router = express.Router()
const request = require('superagent')


router.get('/', (req, res) => {
  request.get('https://api.maas2.jiinxt.com/')
      .then(ApiRes => {
        console.log(ApiRes.body)
        res.json([{
          "weather_condition" : ApiRes.body[0].atmo_opacity,
          "min_temp" : ApiRes.body[0].min_temp,
          "max_temp" : ApiRes.body[0].max_temp,
        }])
      })
      .catch(err => {
        console.log(err)
      })
})

 
module.exports = router