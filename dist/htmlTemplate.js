const cards = data => {
    var cardInput = '';
    for (i=0; i < data.length; i ++) {
        console.log(data[i])
        if (data[i].getRole() === 'Manager') {
            cardInput += managerCard(data[i]);
        }
        else if (data[i].getRole() === 'Intern'){
            cardInput += internCard(data[i]);
        }
        else if (data[i].getRole() === 'Engineer') {
            cardInput += engineerCard(data[i]);
        }
    }
    console.log(cardInput);
    return cardInput;
   
};

const htmlTemplate = (data) => {
    console.log(data);
    
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="./dist/style.css">
</head>
<body>
    
    <header>
        <div class="jumbotron bg-primary text-white jumbotron-fluid">
            <div class="container text-center">
                <h1 class="display-5">My Team</h1>
            </div>
        </div>  
    </header>

<main>
    <div class="row justify-content-center">
    ${cards(data)}
    </div>
    </main>
    </body>
    </html>`;

};

const managerCard = (data) => {

return `
<div class="row justify-content-center">
<section>
<div class="container">
    <div class="manager">
        <div class="card" style="width: 20rem;">
            <div class="card-body">
                <div class="card-header bg-primary text-white Helvetica Neue, Helvetica, Arial, sans-serif">
                <h4 class="card-title"><span class="material-icons">local_cafe</span>${data.name}</h4>
                <h5 class="card-subtitle mb-2">Manager</h5>
                </div>
                <p></p>
                <h6 class="card-text">${data.id}</h6>
                <h6 class="card-text">Email: <a href="${data.email}">${data.email}</a></h6>
                <h6 class="card-text">Office Number:${data.officeNumber}</h6>
            </div>
        </div>
    </div>
</div>
</section>
`

};

const engineerCard = (data) => {

    return `<section>
        <div class="container">
            <div class="engineer">
                <div class="card" style="width: 20rem;">
                    <div class="card-body">
                        <div class="card-header bg-primary text-white Helvetica Neue, Helvetica, Arial, sans-serif">
                        <h4 class="card-title"><span class="material-icons">engineering</span>${data.name}</h4>
                        <h5 class="card-subtitle mb-2">Engineer</h5>
                        </div>
                        <p></p>
                        <h6 class="card-text">${data.id}</h6>
                        <h6 class="card-text">Email: <a href="mailto:${data.email}">${data.email}</a></h6>
                        <h6 class="card-text">GitHub: <a href="${data.github}" target="_blank" rel="noopener noreferrer">${data.github}</a></h6>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
}

const internCard = (data) => {
    
return `
<section>
<div class="container">
    <div class="intern">
        <div class="card" style="width: 20rem;">
            <div class="card-body">
                <div class="card-header bg-primary text-white Helvetica Neue, Helvetica, Arial, sans-serif">
                <h4 class="card-title"><span class="material-icons">school</span>${data.name}</h4>
                <h5 class="card-subtitle mb-2">Intern</h5>
                </div>
                <p></p>
                <h6 class="card-text">ID: 7</h6>
                <h6 class="card-text">Email: <a href="${data.email}">${data.email}</a></h6>
                <h6 class="card-text">School: ${data.school}</h6>
            </div>
        </div>
    </div>
</div>
</section>
`;
};


module.exports = htmlTemplate;