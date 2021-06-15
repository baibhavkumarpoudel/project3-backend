'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    division: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  Team.associate = function(models) {
    Team.hasMany(models.Player, { foreignKey: 'teamId' })
  };
  return Team;
};