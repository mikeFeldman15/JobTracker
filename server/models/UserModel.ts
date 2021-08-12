import { Pool } from "pg";
require('dotenv').config();

// We can put our Postgres URI here for ease of use during development
const myURI = 'postgres://epgjivkh:FEwFDmgKSyLQAGFbirU-yP1O-lONzcgw@chunee.db.elephantsql.com/epgjivkh';

const PG_URI = process.env['PGURI'] || myURI;

/*

Table "user" schema:

user_id SERIAL NOT NULL PRIMARY KEY
username VARCHAR(100) UNIQUE NOT NULL
password VARCHAR(100) NOT NULL
created_on TIMESTAMP NOT NULL
email VARCHAR(255) UNIQUE NOT NULL
last_login TIMESTAMP

*/

const pool = new Pool({
  connectionString: PG_URI
});

export function query(text, params, callback) {
  console.log('Executed query', text);
  return pool.query(text, params, callback);
}