'use strict'

import Sequelize from 'sequelize'

const Model = dbClient => dbClient.define('books', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  isbn: {
    type: Sequelize.STRING,
    allowNull: false
  },
  publishedBy: {
    type: Sequelize.STRING,
    allowNull: false
  },
  publishedAt: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
})

export default Model