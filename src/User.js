class User {
  // User code here
  constructor(username, password, age, loggedIn){
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password){
    if(this.password === password)
    this.loggedIn = true;
  }

  logout(){
    this.loggedIn = false;
  }
}

module.exports = User
