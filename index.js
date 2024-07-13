const inquirer = require('inquirer')

const { Pool } = require('pg');





// Connect to database
const pool = new Pool(
  { user: 'postgres',
    password: 'Tallulah',
    host: 'localhost',
    database: 'employee_db'
},
console.log('Connected to the employee_db!')
)

pool.connect();

question = [
    {
        type: "list",
        name: "inquiry",
        message: "What would you like to do?", 
        choices: ["View all Employees","Add Employee", "Update Employee Role","View All Roles","Add Role", "View All Departments", "Add Department"]

     },
]; 
let roles = []
let managers =[]

const addEmployee = [
  {
    type: "input",
    name:"first_name",
    message: "What is employee's first name?"
  }, 
  {
    type: "input",
    name: "last_name",
    message:"What is employee's last name?"
  },
  {
    type: "list",
    name: "role_id",
    message:"What is your role?",
    choices: [...roles]
  },
  {
    type: "list",
    name:"manager_id",
    message: "Who is your manager?",
    choices: [...managers]
  },
]
function Init() {
  
    inquirer
    .prompt(question)
    .then((answer) => {
      console.log(answer)
        if(answer.inquiry === "View all Employees"){
            viewAll();
          } else if(answer.inquiry ==="View All Roles") {
            viewRoles();
          } else if(answer.inquiry ==="View All Departments") {
            viewDepartments();

          } else if(answer.inquiry==="Add Employee"){
            addnewEmployee();

          }

    })
}
Init();

function viewAll() {
  pool.query('SELECT * FROM employee;', function (err, {rows}) {
    console.table(rows)
    Init();
});
}
function viewRoles() {
  pool.query('SELECT * FROM role;', function(err, {rows}) {
    console.table(rows)
    Init();
  });
}
function viewDepartments() {
  pool.query('SELECT * FROM department;', function(err,{rows}){
    console.table(rows)
    Init();
  })
}
function addEmployeetoDatabase(answers){
  const {first_name, last_name, role_id, manager_id} = answers
  pool.query('INSERT INTO employee(first_name, last_name, role_id, manager_id)VALUES ($1,$2,$3,$4)', [first_name, last_name, role_id, manager_id], function(err, {rows}){
    console.table(rows)
    Init();
  })
}

function getmanagerIDs(){
  pool.query('SELECT first_name,last_name FROM employee;', function(err,{rows}){
    managers =[rows]
  })
    
  }

  function getRoleIDs(){
    pool.query('SELECT title FROM role;', function(err,{rows}){
      test = rows.map(item => item.title)
      console.log(test)
      roles = rows.map(item => item.title)
    })
   
  }



function addnewEmployee(){
  getmanagerIDs();
  getRoleIDs();
  inquirer 
  .prompt(addEmployee)
  .then((answers) => {
    addEmployeetoDatabase(answers);

  })
}









