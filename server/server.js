const express = require('express')
const path = require('path')
const server = express()

const earthMeteo = require('./routes/meteo')
const marsMeteo = require('./routes/meteoMars')

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())


server.use('/api/v2.5/earth-meteo', earthMeteo)
server.use('/api/mars-meteo', marsMeteo)


module.exports = server