'use strict'

import Service from './books.class'
import hook from './books.hook'

const service = (app, models) => {
  const service = new Service('/books', models, hook, {})
  app.use(service.createRouter())
  return service
}

export default service

