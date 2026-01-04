const path = require('path')

const express = require('express')
const app = express()

const firstRouter = require("./routes/firstRouter")
const secondRouter = require("./routes/secondRouter")
const homeRouter = require("./routes/homeRouter")
const contactRouter = require("./routes/contactRouter")
const submitRouter = require("./routes/submitRouter")

app.use(express.urlencoded())

app.use(firstRouter)
app.use(secondRouter)
app.use(homeRouter)
app.use(contactRouter)
app.use(submitRouter)

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);  
})