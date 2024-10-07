const sequelize = require('../config/db')
const DataTypes  = require('sequelize');
const BlogModel = sequelize.define(
    'Blog',
    {
      id:
        {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4 ,// Or DataTypes.UUIDV1
            primaryKey : true
          }
      ,
      image:{
        type: DataTypes.STRING,
        allowNull: false,
        
      },title:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      }
     
    },
    
  );

  module.exports = BlogModel