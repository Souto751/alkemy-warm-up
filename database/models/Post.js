const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../database');

class Post extends Model {};
Post.init({
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    title: DataTypes.STRING,
    contents: DataTypes.STRING,
    image: DataTypes.STRING,
    id_category: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    sequelize,
    modelName: "post"
});

module.exports = Post;