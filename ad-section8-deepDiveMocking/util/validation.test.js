import {expect, it, describe} from 'vitest'
import {validateNotEmpty} from './validation'


describe('validateNotEmpty', () => {
  it('should throw an error if an empty string is provided as a value', () => {
    const emptyMessage = ''

    const validateMessageFn = () => validateNotEmpty(emptyMessage)
    expect(validateMessageFn).toThrow()
  })

  it('should throw an error if an empty string is provided as a value', () => {
    const emptyMessage = ''
    const errorMessage = 'You should provide a valid message'

    const validateMessageFn = () => validateNotEmpty(emptyMessage, errorMessage)
    expect(validateMessageFn).toThrow(errorMessage)
  })
})