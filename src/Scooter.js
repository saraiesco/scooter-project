class Scooter{
  // scooter code here
    constructor(station, user, serial, nextSerial, charge, isBroken){
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextserial++;
    this.nextSerial = 0;
    this.charge = 100;
    this.isBroken = false;
  }

  rent(user){
    if(this.charge <= 20){
      throw  Error ("scooter needs to charge");
    }else if(this.isBroken === true){
      throw  Error ('scooter needs repair');
    }
    else{
      this.station = null;
      this.user = user;
    }
  }

  dock(station){
    this.station = station;
    this.user = null;
    
  }
}


module.exports = Scooter
