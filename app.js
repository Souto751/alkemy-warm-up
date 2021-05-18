// Import
const express = require('express');
const app = express();
const sequelize = require('./database/database');
const Post = require('./database/models/Post');

// port configuration
const PORT = process.env.PORT || 3000;

// -- Endpoints Start -- //

// Get Specific Post by ID
app.get('/posts/:id', function(req, res){
    Post.findByPk(req.params.id).then(post => {
        res.send(post);
    })
})

// Create New Post Endpoint
app.post('/posts', function(req, res){
    Post.create({
        title: req.query.title,
        contents: req.query.contents,
        image: req.query.image,
        category: req.query.category
    }).then(p => {
        res.json(p);
    }).catch(error => {
        res.json(error);
    });
});

// Update Post Endpoint
app.patch('/posts/:id', function(req, res){
    Post.update({
        title: req.query.title,
        contents: req.query.contents,
        image: req.query.image,
        category: req.query.category
    }, {
        where: {
            uuid: req.params.id
        }
    }).then(result => {
        res.json(result);
    }).catch(error => {
        res.json(error);
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