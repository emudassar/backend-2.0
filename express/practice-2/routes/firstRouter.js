const express = require('express')
const path = require('path')
const firstRouter = express.Router()

firstRouter.use((req, res, next) => {
  console.log("First middleware");
  next()
})

module.exports = firstRouter