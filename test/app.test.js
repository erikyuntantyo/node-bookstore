import config from 'config'
import app from '../src/app'

describe('Application tests with Jest', () => {
  beforeAll(done => {
    this.server = app.listen(config.server.port)
    this.server.once('listening', () => done())
  })

  afterAll(done => {
    this.server.close(done)
  })

  test('Test service', () => {
    expect(true).toEqual(true)
  })
})
