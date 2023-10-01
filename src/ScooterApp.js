const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(stations, registeredUsers){
    this.stations = { 'chicago' : [], 'multiverse' : [], 'google' : [] };
    this.registeredUsers = {};
    // registeredUsers = { shami : { username: ‘shami1’ , password: ‘milo’ , age : 17, logginIn: true} ,sarai : { username: ‘sarai’ , password: ‘hamilton’ , age : 10, logginIn: false} }

  }

  registeredUsers(password,username, age){
    if(this.registeredUsers[username]){
      throw new Error('already registered')
    }else if(this.registeredUsers[age] < 18){
      throw new Error('too young to register')
    }else{
      this.registeredUsers[username][username] = username;
      this.registeredUsers[username][password] = password;
      this.registeredUsers[username][age]=age;
      this.registeredUsers[username][loggedIn] = false;
      console.log('user has been registered')
      return this.registeredUsers[username];
    }
  }

  loginUser(username, password){
    let object = this.registeredUsers
    for(property in object){
      if( property && object[property][username] === username && object[property][password] === password){
        User.login(password)
        console.log(`${property} has been logged in`)
      }else{
        throw new Error('Username or password is incorrect')
      }
    }
  }

  logoutUser(username){
    let object = this.registeredUsers;
    for(property in object){
      if(object[property][username]){
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
          const scooter = { [`scoot${  Math.floor(Math.random() * 25)}`] : {
          'station' : station ,
          'user' : null ,
          'charge' : 100, 
          'isBroken' : false , 
          'serial' : 'nextSerial',
          'nextSerial': 1++}}
          this.stations[station].push(scooter)
        console.log('created new scooter')
      return scooter
      }
  }

  dockScooter(scooter, station){
      if(!this.stations[station]){
        throw new Error('no such station')
      }else if(this.stations[station].scooter ){
        throw new Error('scooter already at station')
      } else{
        Scooter.dock(station)
        this.stations[station].push(scooter)
        console.log('scooter is docked')
      }   
  }
   //registeredUsers = {shami : { username: ‘shami1’ , password: ‘milo’ , age : 17, logginIn: true} ,sarai : { username: ‘sarai’ , password: ‘hamilton’ , age : 10, logginIn: false} }
   //this.stations = {chicago : [ scoot1:{station:chicago, user:null} , scoot2:{station:chicago, user:null}] , brooklyn : [scoot4:{station:brooklyn,user:null}, scoot9:{station:brooklyn,user:null}]}
  rentScooter(scooter, user){
    if(scooter.user !== 'null'){
      throw new Error('scooter is already rented')
    } 
    let array = this.stations[scooter.station]
    for(let i = 0; i< array.length ; i++){
      if(array[i] === scooter)
      this.stations[scooter.station].splice(i,1)
    }
    Scooter.rent(user)
    console.log('scooter is rented')
  }

  print(){
    console.log(this.registeredUsers)
    console.log(this.stations)
  }
}

module.exports = ScooterApp
