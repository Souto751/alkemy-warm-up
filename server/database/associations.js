const Post = require('./models/Post');
const Categories = require('./models/Categories');

// Relates the tables, and creates 'categoryIdCategory' column into Post, which is the FK to connect the tables.
Categories.hasMany(Post);
Post.belongsTo(Categories); // The FK belongs to the 'categories' table