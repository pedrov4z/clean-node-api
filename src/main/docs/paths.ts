import { loginPath, signUpPath, surveyPath, surveyResultPath } from './paths/'

export default {
  '/login': loginPath,
  '/signup': signUpPath,
  '/survey': surveyPath,
  '/survey/{surveyId}/answer': surveyResultPath
}
