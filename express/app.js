const express = require('express')
const app = express()

app.use("/", (req, res, next) => {
  console.log("First middleware");
  // res.send("first middleware")
  next()
})

app.use("/name", (req, res, next) => {
  console.log("Second middleware");
  res.send("<p>Mudassar Khan</p>")
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  
})
