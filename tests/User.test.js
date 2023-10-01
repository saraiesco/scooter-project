const User = require('../src/User');

const user = new User("Joe Bloggs", "test123", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  })
  // test password
  test("password should be a string", () => {
    expect(typeof user.password).toBe("string");
  })
  // test age
  test("age should be a number", () => {
    expect(typeof user.age).toBe("number");
  })
})

//methods
  // test login
  describe('login function', () =>{ 
    test('changes user.loggedIn to be true', () =>{
      jest.before(() => {
        user.login();
      })      
      expect(user.loggedIn).toEqual(true)
    })
  })

  // test logout

  describe('logout function', () =>{
    test('changes user.loggedIn to be false', () =>{
      jest.before(() => {
        user.logout();
      }) 
      expect(user.loggedIn).toEqual(false)
    })
  })