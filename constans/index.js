function User(firstName, lastName, age, isMale, email, isSubbscriber = false){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubbscriber = isSubbscriber;
}

function UserPrototype(){
  this.fullName = function(){
    return '${this.firstName} ${this.lastName}'
  }
}

User.prototype = new UserPrototype();

function createRondomUser(amount = 1){  
  const db = [];
  for(let i = 0; i<amount; i++){
    const user = new User(
      `Name${i}`,
      `Lname${i}`,
      Math.ceil(Math.random()*60+20),
      Math.random()>0.5,
      `email${i}@gmail.com`
    );
    db.push(user);
  }
  return db;
}

const users = createRondomUser(50);
console.table(users);

const fullNameUsers = users.map(function(user){
  return user.fullName();
});

function isOldPeople(user){
   return user.age>=OLD_AGE;
}
const oldUsers = users.filter(isOldPeople);
console.table(oldUsers);