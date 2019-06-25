'use strict'

import BooksService from './books'

export default class Services {
  constructor(app, models) {
    BooksService.initialize(app, models)
  }

  static initialize(app, models) {
    if (!this._services) {
      this._services = new Services(app, models)
    }

    return this._services
  }
}
