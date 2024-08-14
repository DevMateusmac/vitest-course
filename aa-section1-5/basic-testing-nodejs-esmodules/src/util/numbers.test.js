import { describe, expect, it } from 'vitest'
import { transformToNumber } from './numbers'


describe('transformToNumber', () => {
  it('should transform a number of type string to a type number', () => {
    const number = '1'

    const result = transformToNumber(number)
    expect(result).toBeTypeOf('number')
  })

  it('should throw and error if an invalid value is passed as a parameter', () => {
    const number = undefined

    const result = transformToNumber(number);

    expect(result).toBeNaN();
  })
})