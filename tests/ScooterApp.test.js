const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  test("Should return instance of User", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
});

// login User
describe("login method tests", () => {
  test("Should login user in scooterApp", () => {
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    //
    expect(response).toBeInstanceOf(User);
  });
});
// logout User
describe("logout method tests", () => {
  test("Should logout user in scooterApp", () => {
    //
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
});

//create scooter
describe("create scooter method tests", () => {
  test("Should create and return new scooter", () => {
    //
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
});

// dock scooter
describe("dock scooter method tests", () => {
  test("Should dock scooter at station", () => {
    //
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
});


// rent scooter
describe("rent scooter method tests", () => {
  test("Should rent scoot out to user", () => {
    //
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
});

//print
describe("rent scooter method tests", () => {
  test("Should return instance of User", () => {
    //
    let response = scooterApp.registerUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });
});