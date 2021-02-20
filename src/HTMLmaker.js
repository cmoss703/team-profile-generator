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

          ${generateTeam}
    
    </body>
    
    </html>`
};

module.exports = generateHTML