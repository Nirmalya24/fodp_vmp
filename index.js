const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended:true,
  })
)

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express and Postgres API'})
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