import dotenv from 'dotenv';
import pgPromise from 'pg-promise';
import Bluebird from 'bluebird';

dotenv.config();

const pg = pgPromise({ promiseLib: Bluebird });
const db = pg(process.env.DATABASE_URL);

export default db;
