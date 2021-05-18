const express = require('express');
const app = express();
const sequelize = require('./database/database');
const Post = require('./database/models/Post');

// setting
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    
    Post.create({
        id: 1,
        title: "Marco Reus: From the top to the injuries.",
        contents: "The german player, is one of the top level players on the world. But he has to face constantly with injuries that don't let him play.",
        image: "https://i.pinimg.com/originals/7c/da/a6/7cdaa6ebd3aba812041550643b2c7176.png",
        category: 1
    }).then(p => {
        res.json(p);
    });

});

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