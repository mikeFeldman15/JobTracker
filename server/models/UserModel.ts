import { Pool } from "pg";
require('dotenv').config();

// We can put our Postgres URI here for ease of use during development
const myURI = 'postgres://epgjivkh:FEwFDmgKSyLQAGFbirU-yP1O-lONzcgw@chunee.db.elephantsql.com/epgjivkh';

const PG_URI = process.env['PGURI'] || myURI;

const pool = new Pool({
  connectionString: PG_URI
});

export function query(text, params, callback) {
  console.log('Executed query', text);
  return pool.query(text, params, callback);
}