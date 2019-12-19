'use strict';
module.exports = (sequelize, DataTypes) => {
  const AuthorDetails = sequelize.define('AuthorDetails', {
    date: DataTypes.DATE,
    popularity: DataTypes.INTEGER,
    isTrending: DataTypes.BOOLEAN,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    numComments: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING,
    codeSubmissionTotal: DataTypes.INTEGER,
    pledgeTotal: DataTypes.FLOAT,
    pledgeGoal: DataTypes.FLOAT,
    pledgerCount: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  AuthorDetails.associate = function(models) {
    AuthorDetails.hasMany(models.Authors)
    // associations can be defined here
  };
  return AuthorDetails;
};