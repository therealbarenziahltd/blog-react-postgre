'use strict';
module.exports = (sequelize, DataTypes) => {
  const PrivateMessage = sequelize.define('PrivateMessage', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    isRead: DataTypes.BOOLEAN
  }, {});
  PrivateMessage.associate = function(models) {
    PrivateMessage.belongsTo(models.User, { as: 'author'});
    PrivateMessage.belongsTo(models.User, { as: 'recipient'});
  };
  return PrivateMessage;
};