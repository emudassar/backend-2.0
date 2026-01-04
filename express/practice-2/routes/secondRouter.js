const express = require('express')
const path = require('path')
const secondRouter = express.Router()

secondRouter.use((req, res, next) => {
  console.log("Second middleware");
  next()
})

module.exports = secondRouter