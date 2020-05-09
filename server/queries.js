const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'users',
  password: '123456',
  port: 5432
})

;(async function() {
  const client = await pool.connect()
  await client.query('SELECT NOW()')
  client.release()
})()

const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
    if(err){
      throw err
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  console.log(request.params.id)
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM users where id = $1', [id], (error, results) => {
    if(error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  console.log(request.body)
  const {name, email} = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`User added with ID: ${results.insertId}`)
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const {name, email} = require.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if(error){
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

const getTables = (request, response) => {
  pool.query('SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname != \'pg_catalog\' AND schemaname != \'information_schema\'',
    (error, results) => {
      if(error) {
        throw error
      }
      let tableList = { "tables": [] }
      for (let i = 0; i < results.rows.length; i++) {
        tableList.tables.push(results.rows[i].tablename);
      }

      response.status(200).json(results.rows)
  })
}

const tableQuery = (request, response) => {
  const tableName = request.params.table
  tables = ["users", "streams", "data_import", "bird_data", "birds_obs_area",
            "dparea_land", "dpf2001_169sp_areas", "dpboundary", "trails",
            "management_zones"]

  if(tables.includes(tableName)) {
    let query = `SELECT * FROM ${tableName}`
    pool.query(query, (error, results) => {
      if(error){
        throw error
      }
      response.status(200).json(results.rows)
    })
    
  } else {
    response.status(416).send("Invalid table Name")
  }
}

module.exports = {
  getUsers, getUserById, createUser, updateUser, deleteUser, getTables,
  tableQuery
}