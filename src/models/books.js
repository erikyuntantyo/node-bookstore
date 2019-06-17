'use strict'

import Sequelize from 'sequelize'

class Model {
  constructor(dbClient) {
    this.dbClient = dbClient
  }

  static init(dbClient) {
    if (!this.model) {
      this.model = new Model(dbClient)
    }

    return this.model.define()
  }

  define() {
    return this.dbClient.define('books', {
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
  }
}

export default Model