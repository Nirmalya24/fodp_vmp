import { Pool } from 'pg';

import dotenv from 'dotenv';

dotenv.config();

const databaseConfig = {connectionString: process.env.TEST_DATABASE_URL_LOCALHOST};
const pool = new Pool(databaseConfig)

export default pool;