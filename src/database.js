const mongoose = require('mongoose');

//using windows OS, to initializate use in console the command:< mongod >
const URI = 'mongodb://localhost/mern-tasks';
mongoose.connect(URI)
    .then(db => console.log('Connected to database'))
    .catch(error => console.error(error));


    module.exports = mongoose;