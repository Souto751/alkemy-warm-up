const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../database');

class Post extends Model {};
Post.init({
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false,
        required: true
    },
    title: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false,
        len:[1, 100]
    },
    contents: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "post"
});

module.exports = Post;