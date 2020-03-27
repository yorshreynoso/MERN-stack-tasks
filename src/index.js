const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose} = require('./database');

const app = express();
//settings
app.set('PORT', 3000);


//middleware
app.use(morgan('dev'));
app.use(express.json());        //receive information json , bodyparser it was used, now is into express.

//Routes
app.use('/api/task', require('./routes/task.routes'));  //main url localhost:3000/api/task



//static files
app.use(express.static(path.join(__dirname, 'public'))) // slash is not necessary to add, by default path knows 
console.log(path.join(__dirname, 'public'));

//initialazing server

app.listen(app.get('PORT'), () => {
    console.log('Listen on port ', app.get('PORT'));
});