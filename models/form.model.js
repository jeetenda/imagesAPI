import { connection } from '../config/db.config.js';

export function getFormModel(formId, callback) {
  const query = `SELECT * FROM forms WHERE id=${formId}`;
  connection.query(query, callback);
}

export function editFormModel(formId, value, callback) {
  const query = `UPDATE forms SET data='${value}' WHERE id=${formId}`;
  connection.query(query, callback);
}

export function createFormModel(value, callback) {
  const query = `INSERT INTO forms (data) VALUES ('${value}')`;
  connection.query(query, callback);
}

export function deleteFormModel(formId, callback) {
  const query = `DELETE FROM forms WHERE id=${formId}`;
  connection.query(query, callback);
}