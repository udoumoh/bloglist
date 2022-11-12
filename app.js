const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const {error,info} = require('./utils/logger')
const blogRouter = require('./controllers/notes')
const {MONGODB_URI} = require('./utils/config')
require('dotenv').config()

mongoose.connect(MONGODB_URI)
    .then(info('connected to mongodb'))
    .catch((err) => error('error connecting to mongodb', err.message))

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogRouter)

module.exports = app