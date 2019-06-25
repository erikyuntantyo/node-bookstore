'use strict'

import Sequelize from 'sequelize'
import uuidv4 from 'uuidv4'

export default class Model {
  constructor(dbClient) {
    this._schema = dbClient.define('books', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: uuidv4()
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

  static initialize(dbClient) {
    if (!this._model) {
      this._model = new Model(dbClient)
    }

    return this._model
  }

  static getSchema() {
    if (this._model) {
      return this._model._schema
    }

    throw new Error('Model must be initialized...')
  }

  getSchema() {
    return this._schema
  }
}
