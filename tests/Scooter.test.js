const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
})

//Method tests
describe('scooter methods', () => {
  // FINISH for ERRORS
  //rent method
  test('rent scooter to user', () =>{
    // this.charge <=10
      scooter.rent(user);     
    expect(Scooter.rent()).toThrow("scooter needs to charge")

    //this.isBroken === true
      scooter.rent(user); 
    expect(Scooter.dock()).toThrow('scooter needs repair')

      scooter.rent(user);   
    expect(scooter.station).toBe(null)
    expect(scooter.user).toBe(user)
  })
  //dock method
  test('dock scooter at station', () =>{
      scooter.dock(station);
    expect(scooter.station).toBe(station)
    expect(scooter.user).toBe(null)
  })

})
