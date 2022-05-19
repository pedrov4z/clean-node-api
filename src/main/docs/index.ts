import { badRequest, forbidden, notFound, serverError, unauthorized } from './components'
import { loginPath, signUpPath, surveyPath } from './paths'
import { accountSchema, apiKeyAuthSchema, errorSchema, loginParamsSchema, signUpParamsSchema, surveyAnswerSchema, surveySchema, surveysSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: "Mango's course API for programmer polls",
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://www.gnu.org/licenses/gpl-3.0.txt'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Poll'
  }],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/survey': surveyPath
  },
  schemas: {
    account: accountSchema,
    error: errorSchema,
    loginParams: loginParamsSchema,
    signUpParams: signUpParamsSchema,
    surveyAnswer: surveyAnswerSchema,
    survey: surveySchema,
    surveys: surveysSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest,
    forbidden,
    notFound,
    serverError,
    unauthorized
  }
}
