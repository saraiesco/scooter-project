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

  rent(user){
    if(this.charge <= 20){
      throw new Error ("scooter needs to charge");
    }else if(this.isBroken === true){
      throw new Error ('scooter needs repair');
    }
    else{
      this.station = null;
      this.user = user;
    }
  }

  dock(station){

  }
}


module.exports = Scooter
