const express = require('express');
const path = require('path')
const app = express()


app.use('/', (request, response) => {
  response.render('app.js')
})

app.listen('3000')
console.log("listening on port 3000");
module.exports = app
