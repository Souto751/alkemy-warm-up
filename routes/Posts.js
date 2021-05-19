const express = require('express');
const router = express.Router();
const Post = require('../database/models/Post');

// -- Endpoints Start -- //

// Get All Posts Endpoint
router.get('/', function(req, res){
    Post.findAll({attributes: ['title', 'contents', 'image', 'category', 'createdAt']}).then(posts => {
        res.json(posts);
    })
});

// Get Specific Post by ID Endpoint
router.get('/:id', function(req, res){
    Post.findByPk(req.params.id).then(post => {
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
router.post('/', function(req, res){
    Post.create({
        title: req.query.title,
        contents: req.query.contents,
        image: req.query.image,
        category: req.query.category
    }).then(p => {
        res.json({
            "success": "The post was created successfully."
        });
    });
});

// Update Post Endpoint
router.patch('/:id', function(req, res){
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
        if(result == 0){
            res.json({
                "error": "Error. The post doesn't exist."
            })
        }else{
            res.json({
                "success": "The post was updated successfully."
            });
        }
    })
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