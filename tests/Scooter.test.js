const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
})

beforeEach(() => {
  scooter = new Scooter();
});
//Method tests
describe('scooter methods', () => {
  // tests here!
  //rent method
  test('rent scooter to user', () =>{
      scooter.rent("Joe Bloggs");   
    expect(scooter.station).toBe(null)
    expect(scooter.user).toBe("Joe Bloggs")
  })

 test('rent throws error due to charge', () =>{
    // this.charge <=10
      scooter.charge = 10   
    expect(()=>scooter.rent("Joe Bloggs")).toThrow("scooter needs to charge")
 })

  test('rent throws error due to broken', () =>{
    //this.isBroken === true
      scooter.isBroken = true;
    expect(()=>scooter.rent("Joe Bloggs")).toThrow('scooter needs repair')
  })

  //dock method
  test('dock scooter at station', () =>{
      scooter.dock("chicago");
    expect(scooter.station).toBe("chicago")
    expect(scooter.user).toBeNull()
  })

})
