var fs = require('fs')

var inquirer = require('inquirer')

var Manager = require('./classes/Manager')

var Intern = require('./classes/Intern')

var Engineer = require('./classes/Engineer')

function worker(){
    inquirer.prompt([
        {
            type: "list", 
            name: 'menue', 
            message: 'hello', 
            choices: ['manager','engineer','intern','exit']
        }
    ])
    .then(function(userentry){
        switch(userentry.menue){
        case 'manager': 
        managerdetails()
        break 
        case 'engineer':
        engineerdetails()  
        break
        case 'intern':
        interndetails()
        break
        case 'exit':
            process.exit(0)
        }
    })
}