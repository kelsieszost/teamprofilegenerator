const inquirer = require('inquirer');
const fs = require('fs');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const htmlTemplate = require('./dist/htmlTemplate');

var employees = [];

const managerInfo = function () {
   console.log("Follow the prompts to design your team")
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

const menu = function () {
  return  inquirer.prompt([
        {
        type: 'list',
        message: 'Select employee role',
        name: 'role',
        choices: ['Engineer', 'Intern']
        },
        {
            type: 'text',
            name: 'name',
            message: 'Enter employee name',
            validate: nameInput => {
                if (nameInput) {
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
            message: 'Enter employee ID',
            validate: idInput => {
                if (idInput) {
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
            message: 'Enter employee email',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a email address');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'github',
            message: 'Enter employee GitHUB username',
            when: (input) => input.role === 'Engineer',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('You need to enter a github username!');
                    return false;
                }
            }
        },
        {
            type: 'text',
            name: 'school',
            message: 'Enter school name',
            when: (input) => input.role === 'Intern',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter a school');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }

    ])
    .then(employeesData => {
        let { name , id, email, role, github, school, confirmAddEmployee} = employeesData;
        let employee;

        if(role === 'Engineer') {
            employee = new Engineer(name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);
            console.log(employee);
        }
        employees.push(employee);

        if(confirmAddEmployee) {
            return menu(employees)
        } else {
            // console.log(employees);
            return employees;
            
        }
    })
    
};

managerInfo()
    .then(menu)
    .then(data => {
        const pageHTML = htmlTemplate(data)
        fs.writeFile('./index.html', pageHTML, err => {
            if(err) {
                console.log(err);
                return;
            } else {
                console.log("Profiles updated")
            }
        })
    });
