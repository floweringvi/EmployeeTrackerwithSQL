DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db

CREATE TABLE department (
    department_id SERIAL PRIMARY KEY
    name VARCHAR(30) UNIQUE NOT NULL

)

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
   FOREIGN KEY (department_id)REFERENCES department(department_id)
)

CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL, 
    role_id INTEGER NOT NULL, 
    manager_id INTEGER 
    --This references a role that may or may not exist
)