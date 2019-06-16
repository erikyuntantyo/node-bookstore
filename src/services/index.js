'use strict'

import BooksModel from '../models/books'

import configureBooksService from './books/books.service'

export default {
  generateService: app => {
    const models = {
      books: BooksModel(app.get('dbClient'))
    }

    configureBooksService(app, models)
  }
}
