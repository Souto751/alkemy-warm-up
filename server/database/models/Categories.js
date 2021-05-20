const { Model, DataTypes, Sequelize, INTEGER } = require('sequelize');
const sequelize = require('../database');

class Categories extends Model {};
Categories.init({
    id_category: {
        type: INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING
}, {
    sequelize,
    modelName: "category",
    timestamps: false
});

// Insert into the categories table, the different categories and their ids
sequelize.query("INSERT INTO categories (id_category, name) VALUES (1, 'Fashion'), (2, 'Food'), (3, 'Travel'), (4, 'Music'), (5, 'Lifestyle'), (6, 'Fitness'), (7, 'DIY'), (8, 'Sports'), (9, 'Finance'), (10, 'Political'), (11, 'Parenting'), (12, 'Business'), (13, 'Personal'), (14, 'Movie'), (15, 'Car'), (16, 'News'), (17, 'Pet'), (18, 'Gaming'), (19, 'Technologies');")

module.exports = Categories;

