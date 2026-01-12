const express = require('express')
const path = require('path')
const contactRouter = express.Router()

const rootDir = require('../utils/pathUtil')

contactRouter.get('/contact-us', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact.html'))
})

module.exports = contactRouter