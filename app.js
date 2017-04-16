const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()
var server = require('http').createServer(app)

app.set('view engine', server)
app.use(express.static('public'))
app.get('/', function(request, response){
  response.sendFile('./index.html');
})


server.listen(port)


module.exports = app
