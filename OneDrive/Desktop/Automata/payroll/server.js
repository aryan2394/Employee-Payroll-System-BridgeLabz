const express = require('express');
const path = require('path');
const { readEmployees, writeEmployees } = require('./modules/fileHandler');

const app = express();
const PORT = process.env.PORT || 3000;

// configure view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// body parser
app.use(express.urlencoded({ extended: true }));

// dashboard
app.get('/', async (req, res) => {
  const employees = await readEmployees();
  res.render('index', { employees });
});

// show add form
app.get('/add', (req, res) => {
  res.render('add');
});

// handle add submission
app.post('/add', async (req, res) => {
  const { name, department, basicSalary } = req.body;
  const employees = await readEmployees();
  const id = Date.now();
  employees.push({ id, name, department, basicSalary: parseFloat(basicSalary) });
  await writeEmployees(employees);
  res.redirect('/');
});

// show edit form
app.get('/edit/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const employees = await readEmployees();
  const employee = employees.find(e => e.id === id);
  if (!employee) {
    return res.status(404).send('Employee not found');
  }
  res.render('edit', { employee });
});

// handle edit submission
app.post('/edit/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { name, department, basicSalary } = req.body;
  const employees = await readEmployees();
  const idx = employees.findIndex(e => e.id === id);
  if (idx === -1) {
    return res.status(404).send('Employee not found');
  }
  employees[idx] = {
    id,
    name,
    department,
    basicSalary: parseFloat(basicSalary),
  };
  await writeEmployees(employees);
  res.redirect('/');
});

// delete employee
app.get('/delete/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const employees = await readEmployees();
  const idx = employees.findIndex(e => e.id === id);
  if (idx === -1) {
    return res.status(404).send('Employee not found');
  }
  employees.splice(idx, 1);
  await writeEmployees(employees);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});