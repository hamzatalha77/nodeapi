require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('hello word')
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
