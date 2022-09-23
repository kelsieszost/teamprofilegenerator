const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

var employees = [];

const managerInfo = function () {
    // prompts for manager
   return inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the manager's name?",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is the employee ID?',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter an ID');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'email',
            message: 'Enter email address',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter an email address');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'office',
            message: 'Enter office number',
            validate: office => {
                if (office) {
                    return true;
                } else {
                    console.log('Please enter a office number');
                    return false;
                }
            }
        },
    ])

    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager(name, id, email, officeNumber);
        employees.push(manager);
       
      
    })
};