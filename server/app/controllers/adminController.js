import moment from 'moment';

import dbQuery from '../db/dev/dbQuery';

import {
  hashPassword,
  isValidEmail,
  validatePassword,
  isEmpty,
  generateUserToken,
} from '../helpers/validations';

import {
  errorMessage, successMessage, status,
} from '../helpers/status';

/**
   * Create A Admin
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
const createAdmin = async (req, res) => {
  const {
    email, first_name, last_name, password,
  } = req.body;
  const { is_admin } = req.user;
  const isAdmin = true;
  const created_on = moment(new Date());

  if (!is_admin === false) {
    errorMessage.error = 'Sorry You are unauthorized to create an admin';
    return res.status(status.bad).send(errorMessage);
  }

  if (isEmpty(email) || isEmpty(first_name) || isEmpty(last_name) || isEmpty(password)) {
    errorMessage.error = 'Email, password, first name and last name field cannot be empty';
    return res.status(status.bad).send(errorMessage);
  }

  if (!isValidEmail(email)) {
    errorMessage.error = 'Please enter a valid Email';
    return res.status(status.bad).send(errorMessage);
  }

  if (!validatePassword(password)) {
    errorMessage.error = 'Password must be more than five(5) characters';
    return res.status(status.bad).send(errorMessage);
  }

  const hashedPassword = hashPassword(password);
  const createUserQuery = `INSERT INTO
      users(email, first_name, last_name, password, is_admin, created_on)
      VALUES($1, $2, $3, $4, $5, $6)
      returning *`;
  const values = [
    email,
    first_name,
    last_name,
    hashedPassword,
    isAdmin,
    created_on,
  ];

  try {
    const { rows } = await dbQuery.query(createUserQuery, values);
    const dbResponse = rows[0];
    delete dbResponse.password;
    const token = generateUserToken(dbResponse.email, dbResponse.id, dbResponse.is_admin, dbResponse.first_name, dbResponse.last_name);
    successMessage.data = dbResponse;
    successMessage.data.token = token;
    return res.status(status.created).send(successMessage);
  } catch (error) {
    if (error.routine === '_bt_check_unique') {
      errorMessage.error = 'Admin with that EMAIL already exist';
      return res.status(status.conflict).send(errorMessage);
    }
  }
};

/**
 * Update A User to Admin
 * @param {object} req 
 * @param {object} res 
 * @returns {object} updated user
 */
const updateUserToAdmin = async (req, res) => {
  const { id } = req.params;
  const { isAdmin } = req.body;

  const { is_admin } = req.user;
  if (!is_admin === true) {
    errorMessage.error = 'Sorry You are unauthorized to make a user an admin';
    return res.status(status.bad).send(errorMessage);
  }
  if (isAdmin === '') {
    errorMessage.error = 'Admin Status is needed';
    return res.status(status.bad).send(errorMessage);
  }
  const findUserQuery = 'SELECT * FROM users WHERE id=$1';
  const updateUser = `UPDATE users
        SET is_admin=$1 WHERE id=$2 returning *`;
  try {
    const { rows } = await dbQuery.query(findUserQuery, [id]);
    const dbResponse = rows[0];
    if (!dbResponse) {
      errorMessage.error = 'User Cannot be found';
      return res.status(status.notfound).send(errorMessage);
    }
    const values = [
      isAdmin,
      id,
    ];
    const response = await dbQuery.query(updateUser, values);
    const dbResult = response.rows[0];
    delete dbResult.password;
    successMessage.data = dbResult;
    return res.status(status.success).send(successMessage);
  } catch (error) {
    errorMessage.error = 'Operation was not successful';
    return res.status(status.error).send(errorMessage);
  }
};

/** 
 * Display all the users in the database
 * @param {object} req
 * @param {object} res
 * @returns {object} user table
*/

const getUsers = async(req, res) => {
  const { is_admin } = req.user;
  console.log("Is admin? ", is_admin);
  if (is_admin === false) {
    errorMessage.error = 'Sorry You are unauthorized to view users';
    return res.status(status.bad).send(errorMessage);
  }

  const getUsersQuery = `SELECT * FROM users`;
  try {
    const { rows } = await dbQuery.query(getUsersQuery);
    // const dbResponse = rows;
    // delete passwords before sending
    for (let index = 0; index < rows.length; index++) {
      delete rows[index].password;
    }
    return res.send(rows);
  } catch(error) {
    errorMessage.error = 'Operation was not successful';
    console.log(error);
    return res.status(status.error).send(errorMessage);
  }
}

/** 
 * List of all the data tables
 * @param {object} req
 * @param {object} res
 * @returns {object} list of data tables
*/

const getTables = async(req, res) => {
  const { is_admin } = req.user;
  if( is_admin === false) {
    errorMessage.error = "Cannot access Data";
    return res.status(status.bad).send(errorMessage);
  }

  const tableQuery = `SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
    ORDER BY table_name`;
  try {
    const { rows } = await dbQuery.query(tableQuery);
    console.log(`${tableQuery} | ${rows.length}`);
    return res.send(rows);
  } catch(error) {
    return res.status(status.notfound).sendStatus(status.notfound);
  }
}

/** 
 * Displays the requested shapefiles
 * @param {object} req
 * @param {object} res
 * @returns {object} data table
*/

const getTable = async(req, res) => {
  const { tableName } = req.params;
  // const { is_admin } = req.user;
  // if( is_admin === false || tableName == 'users') {
  //   errorMessage.error = "Cannot access Data";
  //   return res.status(status.bad).send(errorMessage);
  // }

  const tableQuery = `SELECT * FROM ${tableName}`;
  try {
    const { rows } = await dbQuery.query(tableQuery);
    return res.send(rows);
  } catch(error) {
    return res.status(status.notfound).sendStatus(status.notfound);
  }
}

export {
  createAdmin,
  updateUserToAdmin,
  getUsers,
  getTables,
  getTable
};