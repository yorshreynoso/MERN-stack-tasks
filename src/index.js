const express = require('express');
const app = express();

//settings
app.set('PORT', 3000);


//middleware


//Routes




//static files


//initialazing server

app.listen(app.get('PORT'), () => {
    console.log('Listen on port ', app.get('PORT'));
});