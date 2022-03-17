import { hash } from 'bcrypt'
import { Collection } from 'mongodb'
import request from 'supertest'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import app from '@/main/config/app'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
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

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('aA1!1111', 12)
      await accountCollection.insertOne({
        name: 'Pedro',
        email: 'ppvaz03@gmail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'ppvaz03@gmail.com',
          password: 'aA1!1111'
        })
        .expect(200)
    })

    test('Should return 401 if credentials are invalid', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'ppvaz03@gmail.com',
          password: 'aA1!1111'
        })
        .expect(401)
    })
  })
})
