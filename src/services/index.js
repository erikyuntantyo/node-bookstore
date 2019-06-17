'use strict'

import BooksModel from '../models/books'

import configureBooksService from './books/books.service'

class Services {
  constructor(app) {
    this.app = app
    this.models = {
      books: BooksModel(app.get('dbClient'))
    }
  }

  static init(app) {
    if (!this.services) {
      this.services = new Services(app)
      this.services.generateService()
    }
  }

  generateService() {
    configureBooksService(this.app, this.models)
  }
}

export default Services
