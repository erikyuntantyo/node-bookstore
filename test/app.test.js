import config from 'config'
import app from '../src/app'
import requestPromise from 'request-promise'

let server

describe('Application tests with Jest', () => {
  beforeAll(done => {
    server = app.listen(config.server.port)
    server.once('listening', () => done())
  })

  afterAll(done => {
    server.close(done)
  })

  it('Test service is running', async () => {
    const body = await requestPromise('http://localhost:3030')
    expect(body.server).not.toBeNull()
  })
})
