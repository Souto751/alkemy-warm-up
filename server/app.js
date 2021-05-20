// Import
const express = require('express');
const app = express();
const sequelize = require('./database/database');
const postsRoute = require('./routes/Posts');
require('./database/associations');

// Port configuration
const PORT = process.env.PORT || 3000;

// Calls Routes from the file Posts.js on the routes folder
app.use('/posts', postsRoute);

// Start the App
app.listen(PORT, function(){
    
    // connect to the database
    // force: TRUE (DROP TABLE) || FALSE (NO DROP)
    sequelize.sync({ force: false }).then(() => {
        console.log('Connected to the database!')
    }).catch(error => {
        console.log('Error: ', error);
    })
});