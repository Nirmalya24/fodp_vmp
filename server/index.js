const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// const jwt = require('express-jwt')
// const jwks = require('jwks-rsa')
const app = express()
const port = 3000
const db = require('./queries')

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send("Friends of Discovery Park | VMP API")
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.post('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.get('/tables/', db.getTables)
app.get('/tables/:table', db.tableQuery)

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})