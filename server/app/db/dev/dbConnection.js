import pool from './pool';

pool.on('connect', () => {
  console.log("DB connected");
});

// Create User Table 
const createUserTable = () => {
  const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
  (id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    create_on DATE NOT NULL,
    rank SMALLINT)`;

  pool.query(userCreateQuery)
    .then((res)=> {
      console.log(res);
      pool.end();
    })
    .catch((err)=>{
      console.log(err);
      pool.end();
    });
};

const createTable = () => {
  createUserTable();
};

pool.on('remove', ()=> {
  console.log("client removed");
  process.exit(0);
})

export {
  createTable
};

require('make-runnable')