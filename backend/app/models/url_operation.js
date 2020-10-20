'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class url_operation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  url_operation.init({
    urlencoded: DataTypes.STRING,
    url: DataTypes.STRING,
    expiresIn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'url_operation',
  });
  return url_operation;
};