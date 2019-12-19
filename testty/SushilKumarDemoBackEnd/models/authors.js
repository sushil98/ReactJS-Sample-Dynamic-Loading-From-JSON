'use strict';
module.exports = (sequelize, DataTypes) => {
  const Authors = sequelize.define('Authors', {
    name: DataTypes.STRING,
    picture: DataTypes.STRING,
    title: DataTypes.STRING,
    score: DataTypes.FLOAT,
    authorDetailID: DataTypes.INTEGER
  }, {});
  Authors.associate = function(models) {
    
    // associations can be defined here
    Authors.belongsTo(models.AuthorDetails, { foreignKey: 'authorDetailID' })
  };
  return Authors;
};