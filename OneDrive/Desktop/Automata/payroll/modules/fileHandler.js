const fs = require('fs').promises;
const path = require('path');

const dataPath = path.join(__dirname, '..', 'employees.json');

async function readEmployees() {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    if (err.code === 'ENOENT') {
      // file doesn't exist yet, return empty list
      return [];
    }
    throw err;
  }
}

async function writeEmployees(employees) {
  await fs.writeFile(dataPath, JSON.stringify(employees, null, 2));
}

module.exports = {
  readEmployees,
  writeEmployees,
};