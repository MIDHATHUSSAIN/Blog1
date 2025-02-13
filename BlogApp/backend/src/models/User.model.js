const sequelize = require('../config/db')
const DataTypes  = require('sequelize');
const roles = require('../utils/roles')
const UserModel = sequelize.define(
    'User',
    {
      id:
        {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4 ,
            primaryKey : true
          }
      ,
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
       
      },
      role:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue : roles.ADMIN
      }
     
    },
    
  );

  module.exports = UserModel