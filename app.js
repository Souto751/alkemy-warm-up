// Import
const express = require('express');
const app = express();
const sequelize = require('./database/database');
const Post = require('./database/models/Post');

// port configuration
const PORT = process.env.PORT || 3000;

// -- Endpoints Start -- //

// Create New Post Endpoint
app.post('/posts', function(req, res){
    Post.create({
        title: req.query.title,
        contents: req.query.contents,
        image: req.query.image,
        category: req.query.category
    }).then(p => {
        res.json(p);
    });

});
// -- Endpoints End -- //

// Start the App
app.listen(PORT, function(){
    console.log('This is the start of the project!');

    // connect to the database
    // force: TRUE (DROP TABLE) || FALSE (NO DROP)
    sequelize.sync({ force: false }).then(() => {
        console.log('Connected to the database!')
    }).catch(error => {
        console.log('Error: ', error);
    })
});