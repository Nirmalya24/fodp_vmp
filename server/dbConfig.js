require('dotenv').config()
const { Pool } = require('pg')
const isProduction = process.env.NODE_ENV === "production"
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString
})

module.exports = { pool }

// module.exports = {
//   HOST: "localhost",
//   USER: "postgres",
//   PASSWORD: "123456",
//   DB: "api",
//   dialect: "postgres",
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// }
