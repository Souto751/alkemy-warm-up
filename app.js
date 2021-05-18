const express = require('express');
const app = express();

// setting
const PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
    res.send('Hello to the Alkemy"s Blog');
});

app.listen(PORT, function(){
    console.log('This is the start of the project!');
});