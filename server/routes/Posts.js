const express = require('express');
const router = express.Router();
const Post = require('../database/models/Post');
const validations = require('../validations/validate-images');
const Categories = require('../database/models/Categories');

// -- Endpoints Start -- //

// Get All Posts Endpoint
router.get('/', function(req, res){
    Post.findAll({include: {model: Categories, attributes: ['name']}, attributes: ['uuid', 'title', 'image', 'createdAt']}).then(posts => {
        res.json(posts);
    })
});

// Get Specific Post by ID Endpoint
router.get('/:id', function(req, res){
    Post.findByPk(req.params.id, {include:{model: Categories, attributes: ['name']}, attributes: ['uuid', 'title', 'contents', 'image', 'createdAt']}).then(post => {
        if(post == null){
            res.json({
                "error": "Error. The post doesn't exist."
            });
        }else{
            res.json(post);
        }
    })
})

// Create New Post Endpoint
// Using Postman I replace the req.body to req.query
router.post('/', function(req, res){
    const imageExists = validations.validate["existance"](req.body.image);
    const validURL = validations.validate["format"](req.body.image);
    if(validURL && imageExists){
        Post.create({
            title: req.body.title,
            contents: req.body.contents,
            image: req.body.image,
            categoryIdCategory: req.body.id_category
        }).then((response) => {
            res.json({
                "success": "The post was created successfully.",
                "post": response
            });
        }).catch(error => {
            res.json(error);
        });
    }else{
        if(imageExists && !validURL){
            res.json({
                "error": "Error. The image format is invalid."
            });
        }else if(!imageExists){
            res.json({
                "error": "Error. The image doesn't existe."
            });
        }
    }
});

// Update Post Endpoint
router.patch('/:id', function(req, res){
    Post.update({
        title: req.body.title,
        contents: req.body.contents,
        image: req.body.image,
        category: req.body.id_category
    }, {
        where: {
            uuid: req.params.id
        }
    }).then(result => {
        if(result == 0){
            res.json({
                "error": "Error. The post doesn't exist."
            })
        }else{
            res.json({
                "success": "The post was updated successfully."
            });
        }
    });
});

// Delete Post Endpoint
router.delete('/:id', function(req, res){
    Post.destroy({
        where: {
            uuid: req.params.id
        }
    }).then(result => {
        if(result == 0){
            res.json({
                "error": "Error. The post doesn't exist."
            })
        }else{
            res.json({
                "success": "The post was deleted successfully."
            });
        }
    })
});

// -- Endpoints End -- //

module.exports = router;