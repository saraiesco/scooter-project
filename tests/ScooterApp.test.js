const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
    constructor(stations, registeredUsers){
    this.stations = { 'chicago' : [], 'multiverse' : [], 'google' : [] };
    this.registeredUsers = {};
    // registeredUsers = { shami : { username: ‘shami1’ , password: ‘milo’ , age : 17, logginIn: true} ,sarai : { username: ‘sarai’ , password: ‘hamilton’ , age : 10, logginIn: false} }

  }

  registerUser(username,password, age){
    if(this.registeredUsers[username]){
      throw('already registered')
    }else if(age < 18){
      throw ('too young to register')
    }
      const user = new User(username, password, age);
      this.registeredUsers[username] = user;
      console.log('user has been registered')
      return this.registeredUsers[username];
  }

  loginUser(username, password){
      if(this.registeredUsers[username] === username && this.registeredUsers[password] === password){
        User.login(password)
        console.log(`${username} has been logged in`)
      }else{
        throw new Error('Username or password is incorrect')
      }
  }

  logoutUser(username){
    for(property in this.registeredUsers){
      if(this.registeredUsers[property][username]){
        User.logout()
        console.log('user is logged out')
      }else{
        throw new Error('no such user is logged in')
      }
    }
  }


  createScooter(station){
      if(!this.stations[station]){
        throw new Error('no such station')
      }else{
          const scooter = new Scooter(station);
          this.stations[station].push(scooter)
        console.log('created new scooter')
      return scooter
      }
  }

  dockScooter(scooter, station){
      if(!this.stations[station]){
        throw new Error('no such station')
      }else if(this.stations[station].scooter ){
        throw  Error('scooter already at station')
      } else{
        Scooter.dock(station)
        this.stations[station].push(scooter)
        console.log('scooter is docked')
      }   
  }
   //registeredUsers = {shami : { username: ‘shami1’ , password: ‘milo’ , age : 17, logginIn: true} ,sarai : { username: ‘sarai’ , password: ‘hamilton’ , age : 10, logginIn: false} }
   //this.stations = {chicago : [ scoot1:{station:chicago, user:null} , scoot2:{station:chicago, user:null}] , brooklyn : [scoot4:{station:brooklyn,user:null}, scoot9:{station:brooklyn,user:null}]}
  rentScooter(scooter, user){
    if(scooter.station === 'null'){
      throw new Error('scooter is already rented')
    } 
    let array = this.stations[scooter.station]
    for(let i = 0; i< array.length ; i++){
      if(array[i] === scooter)
      this.stations[scooter.station].splice(i,1)
      //why cant I just call Scooter.rent(user) here?
       scooter.station = null;
       scooter.user = user;
    }
  }

  print(){
    console.log(this.registerUsers)
    for(station in this.stations){
      console.log(`${station} : ${this.stations[station].length}`)
    }
  }
}


module.exports = ScooterApp

