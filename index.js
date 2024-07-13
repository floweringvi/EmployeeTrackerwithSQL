const inquirer = require('inquirer')

question = [
    {
        type: list,
        name: inquiry,
        message: "What would you like to do?", 
        choices: ["View all Employees","Add Employee", "Update Employee Role","View All Roles","Add Role", "View All Departments", "Add Department"]

     },
]; 

Init