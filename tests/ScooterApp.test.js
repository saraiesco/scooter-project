const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  test("Should return instance of User", () => {
    let response = scooterApp.registerUser("test123" , "Joe Bloggs", 21);
    expect(response).toBeInstanceOf(User);
  });
});

// login User
describe("login method tests", () => {
  test("Should login user in scooterApp", () => {
    scooterApp.loginUser("Joe Bloggs", "test123")
    expect(scooterApp.registeredUsers["Joe Bloggs"]).toBe(true);
  });
});

// logout User
describe("logout method tests", () => {
  test("Should logout user in scooterApp", () => {
    //
    scooterApp.logoutUser("Joe Bloggs")
    expect(scooterApp.registeredUsers["Joe Bloggs"].toBe(false))
  });
});

//create scooter
describe("create scooter method tests", () => {
  test("Should create and return new scooter", () => {
    //
    expect(scooterApp.createScooter("chicago")).toBeInstanceOf(Scooter)
  });
});

// dock scooter
describe("dock scooter method tests", () => {
  test("Should dock scooter at station", () => {
    //
    scooterApp.dockScooter("scoot4567", "chicago")
    expect(["scoot4567"].station).toBe("chicago")
    expect(["scoot4567"].user).toBe(null)
  });
});


// rent scooter
describe("rent scooter method tests", () => {
  test("Should rent scoot out to user", () => {
    //
    scooterApp.rentScooter("scoot4567", "Joe Bloggs")
    expect(["scoot4567"].station).toBe(null)
    expect(["scoot4567"].user).toBe("Joe Bloggs")
  });
});

