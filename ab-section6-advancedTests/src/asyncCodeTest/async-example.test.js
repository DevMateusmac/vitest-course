import {expect, it} from 'vitest'
import { generateToken, generateTokenPromise } from './async-example'




//testing using async - await 

it('should generate a token value', async () => {
  const testUserEmail = 'teste@teste.com';

  const token = await generateTokenPromise(testUserEmail)

  expect(token).toBeDefined();
})

//or just the promise
it('should generate a token value', () => {
  const testUserEmail = 'teste@teste.com';
 

  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
})






//testing with callback, you need to use a parameter on this function bellow
it('should generate a token value', (done) => {
  const testUserEmail = 'test@test.com'

  generateToken(testUserEmail, (err, token) => {
    expect(token).toBeDefined()

    try {
      // expect(token).toBe(2)  
      done();
    } catch (error) {
      done(error);
    }
  })
})