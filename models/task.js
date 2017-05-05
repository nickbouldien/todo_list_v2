'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    name: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsTo(models.List,{
          foreignKey: 'listId',
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return Task;
};
