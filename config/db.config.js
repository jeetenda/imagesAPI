import mysql from 'mysql'

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '9926262714a@A',
  database: 'formdb'
});
