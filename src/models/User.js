const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  USER_IDX: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  USER_NAME: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  USER_NICKNAME: {
    type: DataTypes.STRING(25),
    allowNull: true,
  },
  USER_TYPE: {
    type: DataTypes.ENUM('USER', 'TEST'),
    allowNull: false,
  },
  USER_SOCIAL_TYPE: {
    type: DataTypes.ENUM('KAKAO', 'GOOGLE'),
    allowNull: false,
  },
  USER_SOCIAL_ID: {
    type: DataTypes.STRING(55),
    allowNull: false,
  },
  USER_SOCIAL_UUID: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  USER_REG_DATE: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  USER_LAST_LOGIN_DATE: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  USER_ID_STATE: {
    type: DataTypes.ENUM('ACTIVE', 'BLOCK'),
    allowNull: false,
  },
}, {
  tableName: 'USER_TB',
  timestamps: false,
});

module.exports = User;
