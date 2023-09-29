class Scooter{
//station recieved from scooterApp
  // scooter code here
  constructor(station, user, serial, nextSerial, charge, isBroken){
    this.station = station;
    this.user = null;
    this.serial = serial;
    this.nextSerial = 1;
    this.charge = 100;
    this.isBroken = false;
  }
}


module.exports = Scooter
