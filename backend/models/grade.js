'use strict';
module.exports = (sequelize, DataTypes) => {
  const Grade = sequelize.define('Grade', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Grade.associate = function(models) {
    Grade.hasMany(models.User, { foreignKey: 'gradeId'});
  };
  return Grade;
};