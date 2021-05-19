const Post = require('./models/Post');
const Categories = require('./models/Categories');


Post.hasOne(Categories);

// Adds an id from categories to post
Categories.belongsTo(Post);