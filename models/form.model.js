import { connection } from '../config/db.config.js';

export async function getFormModel(formId) {
  const query = 'SELECT * FROM forms';
const rows = await connection.execute(query);
console.log(rows, "*************")
return rows;
  // const query = `SELECT * FROM forms`;
  // //WHERE id=${formId}`;
  // const data = await connection.execute(query);
  // return data;
}



async function editFormModel(formId) {
  const query = `UPDATE * FROM forms WHERE id=${formId}`;
  const data = await Database.executeQuery(query);
  return data;
}

async function createFormModel(value) {
  const query = `INSERT INTO forms (data) VALUES (${value})`;
  const data = await Database.executeQuery(query);
  return data;
}

async function deleteFormModel(formId) {
  const query = `SELECT * FROM forms WHERE id=${formId}`;
  const data = await Database.executeQuery(query);
  return data;
}