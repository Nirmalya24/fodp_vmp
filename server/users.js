const bcrypt = require('bcrypt')
const { pool } = require('./dbConfig.js')
require('dotenv').config()
// const Pool = require('pg').Pool

// ;(async function() {
//   const client = await pool.connect()
//   await client.query('SELECT NOW()')
//   client.release()
// })()

const userRegister = async (request, response) => {
  let {name, email, password, password2} = request.body
  console.log({name, email, password, password2})

  // form validation
  let errors = []

  if(!name || !email || !password || !password2){
    errors.push({message: "Please enter all fields"})
  }
  if(password.length < 6){
    errors.push({message: "Password should be 6 characters long"})
  }
  if(password != password2){
    errors.push({message: "Passwords do not match"})
  }

  if(errors.length > 0){
    response.render('register', {errors})
  } else {
    // Form validation passed
    let hashedPassword = await bcrypt.hash(password, 10)
    // console.log(hashedPassword)
    pool.query(
      `SELECT * FROM users
      WHERE email = $1`, [email], (err, results)=>{
        if(err) {
          throw err
        }
        console.log(results.rows)
      }
    )
  }
}

module.exports = {
  userRegister
}