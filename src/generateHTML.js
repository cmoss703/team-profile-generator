const index = require("../index");

function generateHTML(employees) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    
    <body>
        <nav class="navbar navbar-dark" style="background-color: #b32fff;">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="../images/team-icon-2.png" alt="" width="30" height="24" class="d-inline-block align-top">
                    Team Profile
                </a>
            </div>
        </nav>
    
        <div class="container">
            <div class="row">

          ${generateTeam(employees)}

            </div>
        </div>
    
    </body>
    
    </html>`
};

function generateTeam(employees) {
    employees.forEach(employees => {

        if (employees.getRole() === "Manager") {
            return `
            <div class="card float-start shadow col-lg-4 col-sm-12 mt-5 mx-auto">
                <div class="card-header bg-dark text-light">
                    ${employees.name}
                    <br>
                    Manager
                </div>
                <ul>
                    <li class="text-dark">ID: ${employees.id}</li>
                    <li class="text-dark">Email: <a href="mailto:${employees.email}">${employees.email}</a></li>
                    <li class="text-dark">Office Number: ${employees.officeNumber}</li>
                </ul>
            </div>
            `
        } else if (employees.getRole() === "Engineer") {
            return `
            <div class="card float-start shadow col-lg-4 col-sm-12 mt-5 mx-auto">
                <div class="card-header bg-dark text-light">
                    ${employees.name}
                    <br>
                    Engineer
                </div>
                <ul>
                    <li class="text-dark">ID: ${employees.id}</li>
                    <li class="text-dark">Email: <a
                            href="mailto:${employees.email}">${employees.email}</a>
                    </li>
                    <li class="text-dark">Github: ${employees.github}</li>
                </ul>
            </div>
            `
        } else {
            return `
            <div class="card float-start shadow col-lg-4 col-sm-12 mt-5 mx-auto">
                <div class="card-header bg-dark text-light">
                    ${employees.name}
                    <br>
                    Intern
                </div>
                <ul>
                    <li class="text-dark">ID: ${employees.id}</li>
                    <li class="text-dark">Email: <a
                            href="mailto:${employees.email}">${employees.email}</a>
                    </li>
                    <li class="text-dark">School: ${employees.school}</li>
                </ul>
            </div>
            `
        }
    })
}

module.exports = generateHTML