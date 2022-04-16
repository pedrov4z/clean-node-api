import { SurveyModel } from '@/domain/models/survey'
import { AddSurveyParams } from '@/domain/usecases/survey/add-survey'

export const mockAddSurveyParams = (): AddSurveyParams => ({
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer'
  }],
  date: new Date()
})

export const mockAddSurveyParamsArray = (): AddSurveyParams[] => ([
  { ...mockAddSurveyParams() },
  {
    question: 'other_question',
    answers: [{
      image: 'other_image',
      answer: 'other_answer'
    }],
    date: new Date()
  }
])

export const mockSurveyModel = (): SurveyModel => ({
  ...mockAddSurveyParams(),
  id: 'any_id'
})

export const mockSurveyModelArray = (): SurveyModel[] => ([
  { ...mockSurveyModel() },
  {
    id: 'other_id',
    question: 'other_question',
    answers: [{
      image: 'other_image',
      answer: 'other_answer'
    }],
    date: new Date()
  }
])
