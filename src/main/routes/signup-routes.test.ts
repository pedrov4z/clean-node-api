import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Pedro',
        email: 'ppvaz03@gmail.com',
        password: 'aA1!1111',
        passwordConfirmation: 'aA1!1111'
      })
      .expect(200)
  })
})
