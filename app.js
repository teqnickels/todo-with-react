const express = require('express')
const path = require('path')
const port = (process.env.PORT || 3000)
const app = express()
const router = require('./routes/router.js')

app.use(express.static(path.resolve(__dirname + '/public')))
app.use('/', router)


// const indexPath = path.join(__dirname, './src/client/index.html')
// const publicPath = express.static(path.join(__dirname, './src/public'))
// app.use('/public', publicPath)
// app.get('/', (request, response) => {
//   response.sendFile(indexPath)
// })





app.listen(port, function(){
  console.log("listening on " +`${port}`)

})

module.exports = app
