'use strict'

import bodyParser from 'body-parser'
import cors from 'cors'
import dbClient from './sequelize'
import errorHandler from 'errorhandler'
import methodOverride from 'method-override'
import server from 'express'
import Services from './services'

const app = server()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(cors())
app.use(errorHandler())

app.set('dbClient', dbClient)

app
  .route('/')
  .get((req, res) => res.json({ server: 'Hi, I am alive...' }).end())

Services.init(app)

export default app
