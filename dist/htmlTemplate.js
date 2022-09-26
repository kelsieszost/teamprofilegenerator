
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
    
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
<main>
    <div class="flex-wrap">
${cards(data)}
</div>
</main> 
</body>
</html>
    `;
};

module.exports = htmlTemplate;