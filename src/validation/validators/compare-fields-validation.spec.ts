import { InvalidParamError } from '../../presentation/errors'
import { CompareFieldsValidation } from './compare-fields-validation'

const makeSut = (): CompareFieldsValidation => new CompareFieldsValidation('field', 'fieldToCompare')

describe('CompareFields Validation', () => {
  test('Should return InvalidParamError if validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'any_value',
      fieldToCompare: 'different_value'
    })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })

  test('Should not return if validation succeeds', () => {
    const sut = makeSut()
    const error = sut.validate({
      field: 'same_value',
      fieldToCompare: 'same_value'
    })
    expect(error).toBeFalsy()
  })
})
