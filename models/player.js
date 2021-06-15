'use strict';
module.exports = (sequelize, DataTypes) => {
  const Player = sequelize.define('Player', {
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    position: DataTypes.STRING,
    teamId: DataTypes.INTEGER
  }, {});
  Player.associate = function(models) {
    Player.belongsTo(models.Team, { foreignKey: 'teamId' })
  };
  return Player;
};