const express = require('express')
const router = express.Router()

// router.use((request, response, next) => {
//   console.log('INTO ROUTER');
//   next()
// })

router.get('/', (request, response) => {
  response.send('IS THIS WACK?!')
})
