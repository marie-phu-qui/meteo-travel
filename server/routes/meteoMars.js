const express = require('express')
const router = express.Router()
const request = require('superagent')


router.get('/', (req, res) => {
  request.get('api-url')
      .then(ApiRes => {
        res.json([
          {
          }
        ])
      })
      .catch(err => {
        console.log(err)
      })
})

 
module.exports = router