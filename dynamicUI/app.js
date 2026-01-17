const path = require('path')

const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const userRouter = require("./routes/userRouter")
const {hostRouter} = require("./routes/hostRouter")

const rootDir = require('./utils/pathUtil');
console.log("Root directory detected as:", rootDir);
app.use(express.static(path.join(rootDir, 'public')));

app.use(express.urlencoded())
app.use(userRouter)
app.use(hostRouter)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir,'views', '404.html'))
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  
}) 
