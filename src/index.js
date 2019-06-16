'use strict'

import chalk from 'chalk'
import config from 'config'
import app from './app'

app.listen(config.server.port, () => {
  console.log(`App listen on port ${chalk.red.bold(config.server.port)}`)
  console.log(`Press ${chalk.blue.bold('CTRL + C')} to stop this server...`)
})
