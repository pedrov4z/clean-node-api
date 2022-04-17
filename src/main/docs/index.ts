import { badRequest, notFound, serverError, unauthorized } from './components'
import { loginPath } from './paths'
import { accountSchema, errorSchema, loginParamsSchema } from './schemas'

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
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    error: errorSchema,
    loginParams: loginParamsSchema
  },
  components: {
    badRequest,
    notFound,
    serverError,
    unauthorized
  }
}
