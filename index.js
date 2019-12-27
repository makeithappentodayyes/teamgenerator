var members = [];

var fs = require("fs");

var inquirer = require("inquirer");

var Manager = require("./classes/Manager");

var Intern = require("./classes/Intern");

var Engineer = require("./classes/Engineer");
var data = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

</head>
<body>
   <div class = "jumbotron">Team Generator App Using Nodejs</div>`;
fs.writeFile("./template/output.html", data, function(error, results) {
  if (error) throw error;
  worker();
});
function worker() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menue",
        message: "hello",
        choices: ["manager", "engineer", "intern", "exit"]
      }
    ])
    .then(function(userentry) {
      switch (userentry.menue) {
        case "manager":
          managerdetails();
          break;
        case "engineer":
          engineerdetails();
          break;
        case "intern":
          interndetails();
          break;
        case "exit":
          var data = `</body>
            </html>`;

          fs.appendFileSync("./template/output.html", data, function(
            error,
            results
          ) {
            if (error) throw error;
            worker();
          });
          process.exit(0);
      }
    });
}

function managerdetails() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managername",
        messege: "enter manager name"
      },
      {
        type: "input",
        name: "managerid",
        messege: "enter manager id"
      },
      {
        type: "input",
        name: "manageremail",
        messege: "enter manager email"
      },
      {
        type: "input",
        name: "officenumber",
        messege: "enter office number"
      }
    ])

    .then(function(response) {
      var manager = new Manager(
        response.managername,
        response.managerid,
        response.manageremail,
        response.officenumber
      );
      var data = {
        name: manager.getname(),
        id: manager.getid(),
        email: manager.getemail(),
        officenumber: manager.getofficeid()
      };
      var html =
      `<div class="card" style="width: 18rem;">
      <div class="card-body">
      <h2 class = 'card-title'>Manager</h2>
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.id}</p>
        <p class= "card-text">${data.email}</p>
        <p class= "card-text">${data.officenumber}</p>
      </div>
    </div>`
      fs.appendFile("./template/output.html", html, function(error, results) {
        if (error) {
          throw error;
        } else {
          console.log(data);
          worker();
        }
      });
    });
}
function engineerdetails() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineername",
          messege: "enter engineer name"
        },
        {
          type: "input",
          name: "engineerid",
          messege: "enter engineer id"
        },
        {
          type: "input",
          name: "engineeremail",
          messege: "enter engineer email"
        },
        {
          type: "input",
          name: "githubname",
          messege: "enter github name"
        }
      ])
  
      .then(function(response) {
        var engineer = new Engineer(
          response.engineername,
          response.engineerid,
          response.engineeremail,
          response.githubname
        );
        var data = {
          name: engineer.getname(),
          id: engineer.getid(),
          email: engineer.getemail(),
          github: engineer.getgithub()
        };
        var html =
        `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h2 class = 'card-title'>Engineer</h2>
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.id}</p>
          <p class= "card-text">${data.email}</p>
          <p class= "card-text">${data.github}</p>
        </div>
      </div>`
        fs.appendFile("./template/output.html", html, function(error, results) {
          if (error) {
            throw error;
          } else {
            console.log(data);
            worker();
          }
        });
      });
  }
  function interndetails() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internname",
          messege: "enter intern name"
        },
        {
          type: "input",
          name: "internid",
          messege: "enter intern id"
        },
        {
          type: "input",
          name: "internemail",
          messege: "enter intern email"
        },
        {
          type: "input",
          name: "schoolname",
          messege: "enter school name"
        }
      ])
  
      .then(function(response) {
        var intern = new Intern(
          response.internname,
          response.internid,
          response.internemail,
          response.schoolname
        );
        var data = {
          name: intern.getname(),
          id: intern.getid(),
          email: intern.getemail(),
          schoolname: intern.getschool()
        };
        var html =
        `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h2 class = 'card-title'>Manager</h2>
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">${data.id}</p>
          <p class= "card-text">${data.email}</p>
          <p class= "card-text">${data.schoolname}</p>
        </div>
      </div>`
        fs.appendFile("./template/output.html", html, function(error, results) {
          if (error) {
            throw error;
          } else {
            console.log(data);
            worker();
          }
        });
      });
  }