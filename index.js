const inquirer = require('inquirer')
const express = require('express');

const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const pool = new Pool(
  { user: '',
    password: '',
    host: 'localhost',
    database: 'employee_db'
},
console.log('Connected to the employee_db!')
)

pool.connect();

question = [
    {
        type: list,
        name: inquiry,
        message: "What would you like to do?", 
        choices: ["View all Employees","Add Employee", "Update Employee Role","View All Roles","Add Role", "View All Departments", "Add Department"]

     },
]; 

function Init() {
    inquirer
    .prompt(question)
    .then((answer) => {
        if(answer === "View all Employees"){
            pool.query('', function (err, {rows}) {
                console.log(rows)
            });

        } else if (answer === "Add Employee") {
            pool.query('')

        }

    })
}







pool.query(`DELETE FROM course_names WHERE id = $1`, [3], (err, {rows}) => {
  if (err) {
    console.log(err);
  }
  console.log(rows);
});

pool.query('SELECT * FROM course_names', function (err, {rows}) {
  console.log(rows);
});


app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
