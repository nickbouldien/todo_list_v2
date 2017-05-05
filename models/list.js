'use strict';
module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define('List', {
    name: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        List.hasMany(models.Task,{
            foreignKey: 'listId',
            as: 'tasks'
          })
      }
    }
  });
  return List;
};
