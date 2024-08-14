import { it, expect, beforeAll, beforeEach, afterAll, afterEach, describe } from 'vitest';

import { User } from './hooks';


// so we can use add a global email to set in all tests and use hooks 

const testEmail = 'test@test.com';
let user; 


beforeAll(() => {
  user = new User(testEmail);
  console.log('beforeAll');
});
//it will execute before each "it" test, so will reset the user so it can be attributed again for the next text
beforeEach(() => {
  user = new User(testEmail);
  console.log('beforeEach');
}); 

afterEach(() => {
  user = new User(testEmail);
  console.log('afterEach');
});

afterAll(() => {
  console.log('afterAll');
});



//concurrent makes the tests run simultaneously, adding it in all "it" or on the describe method, it is really useful when you have a lot of tests to run
describe.concurrent('test', () => {

})


it.concurrent('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it('should have an email property', () => {
  
  expect(user).toHaveProperty('email');
});

it('should store the provided email value', () => {
  
  expect(user.email).toBe(testEmail);
});

it('should clear the email', () => {
    user.clearEmail();

  expect(user.email).toBe('');
});

it('should still have an email property after clearing the email', () => {
    user.clearEmail();

  expect(user).toHaveProperty('email');
});



//to much repetition here

// it('should update the email', () => {
//   const testEmail = 'test@test.com';
//   const newTestEmail = 'test2@test.com';

//   const user = new User(testEmail);
//   user.updateEmail(newTestEmail);

//   expect(user.email).toBe(newTestEmail);
// });

// it('should have an email property', () => {
//   const testEmail = 'test@test.com';

//   const user = new User(testEmail);

//   expect(user).toHaveProperty('email');
// });

// it('should store the provided email value', () => {
//   const testEmail = 'test@test.com';

//   const user = new User(testEmail);

//   expect(user.email).toBe(testEmail);
// });

// it('should clear the email', () => {
//   const testEmail = 'test@test.com';

//   const user = new User(testEmail);
//   user.clearEmail();

//   expect(user.email).toBe('');
// });

// it('should still have an email property after clearing the email', () => {
//   const testEmail = 'test@test.com';

//   const user = new User(testEmail);
//   user.clearEmail();

//   expect(user).toHaveProperty('email');
// });