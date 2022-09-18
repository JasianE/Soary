const express = require('express')
const models = require('./models/general.model')

const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(models)
})