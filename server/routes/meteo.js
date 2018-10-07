const express = require('express')
const router = express.Router()
const request = require('superagent')


const Earth_API_Key = '6152bcddf46f77b26c8b56a8261d6921'


const user_units = 'metric'
const user_city = 'bouffemont'

router.get('/', (req, res) => {
    request.get(`https://api.openweathermap.org/data/2.5/find?q=`+user_city+`&type=like&units=`+user_units+`&APPID=`+Earth_API_Key)
      .then(ApiRes => {
        console.log(ApiRes.body)
        res.json(ApiRes.body)
      })
      .catch(err => {
        console.log(err)
      })
  })
  
  
  module.exports = router