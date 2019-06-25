'use strict'

import booksModel from './books'

export default class Models {
  constructor(dbClient) {
    this._schemas = {
      books: booksModel.initialize(dbClient).getSchema()
    }
  }

  static initialize(dbClient) {
    if (!this._models) {
      this._models = new Models(dbClient)
    }

    return this._models
  }

  getModels() {
    return this._schemas
  }
}
