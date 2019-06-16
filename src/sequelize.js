'use strict'

import config from '../config/default.json'
import Sequelize from 'sequelize'

const { name, username, password, host, dialect } = config.db

const dbClient = new Sequelize(name, username, password, {
  host,
  dialect
})

dbClient
  // Uncomment setting below to reset the database
  .sync(/*{ force: true }*/)
  .then(() => {
    console.log('Database & tables created!')
  })

export default dbClient
