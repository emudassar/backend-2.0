const express = require('express')
const path = require('path')
const submitRouter = express.Router()

const rootDir = require('../utils/pathUtil')

submitRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'submit.html'))
})

module.exports = submitRouter