const bodyParser = require('body-parser');
const express = require('express')
const app = express()

app.use((req, res, next) => {
  console.log("First middleware");
  next()
})

app.use((req, res, next) => {
  console.log("Second middleware");
  next()
})

// app.use((req, res, next) => {
//   console.log("third middleware");
//   res.send("<h2>Welcome to practice set 1</h2>")
//   next()
// })

app.get("/", (req, res, next) => {
  console.log("Home middleware");
  res.send(`<a href="/contact-us">Contact Us</a>`)
})

app.get("/contact-us", (req, res, next) => {
  console.log("Contact us middleware");
  res.send(`
    <h2>Give your details</h2>
    <form action="contact-us" method="POST">
    <input type="text" placeholder="name" name="name">
    <input type="email" name="email" id="" placeholder="email">
    <button type="submit">Submit</button>
  </form>
  `)
})

app.use(bodyParser.urlencoded())

app.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.send("<h3>Thanks for submitting your details</h3>")
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);  
})