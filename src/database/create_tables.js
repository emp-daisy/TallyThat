import executeQuery from "../controller/pg";

const create_user_table = `
CREATE TABLE IF NOT EXISTS Users
(
  id SERIAL PRIMARY KEY,
  username text NOT NULL UNIQUE,
  fullname text NOT NULL,
  password text NOT NULL
);`;

const create_stock_table = `
CREATE TABLE IF NOT EXISTS Stocks (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  quantity INT NOT NULL,
  description TEXT
);`;

/**
 * Create Table
 */
export const setupTables = () => {
  console.log('Creating tables...');
  executeQuery(create_user_table, (res) => {});
  executeQuery(create_stock_table, (res) => {});
  console.log('...Created tables');
}