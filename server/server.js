const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000
const db = require('./queries')
const users = require('./users')

app.set("view engine", "ejs")
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.render('index')
})

// user auth
app.get('/users/login', (req, res) => {
  res.render('login')
})
app.get('/users/register', (req, res) => {
  res.render('register')
})
app.get('/users/profile', (req, res) => {
  res.render('profile', {user: "Nirmalya"})
})
app.post('/users/register', users.userRegister)

app.get('/tables/', db.getTables)
app.get('/tables/:table', db.tableQuery)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})