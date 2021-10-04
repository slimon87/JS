// const dog = {
//   name: 'Sem',
//   isMale: true,
//   color: 'black',
//   breed: 'Pitbul',
//   age: 10,
//   weigth: 30,
//   say: function(){
//     "Gav-gav";
//   },
// }

// console.log(dog);
// console.log(dog.name);

// function Dog(name, isMale, color, breed, age){

// };
// const newDog = new Dog('Sem', false, 'grey', 'yard', 2);

// function User(name,secondName,age){
//   this.name = name;
//   this.secondName = secondName;
//   this.age = age;
//   this.returnName = function(){
//     return this.name + ' ' + this.secondName;
//   }
// }

// const user1 = new User('Vasya', 'Vasilev', 23);
// const user2 = new User('Ivan', 'Ivanskij', 27);
// const user3 = new User('Bred', 'Pit', 32);
//  console.log(user1.name);
//  console.log(user2.name);
//  console.log(user3.returnName());

// function Country (name,population, area){
//   this.name = name;
//   this.population = population;
//   this.area = area;
//   this.getDensity = function(){
//     return this.population/this.area;
//   }
// }
// const ukraine = new Country('Ukraine', 4000000, 603628);
// console.log(ukraine.getDensity());

// function Auto(name,maxSpeed){
//   this.name = name;
//   this.maxSpeed = maxSpeed;
//   this.speed = 0;
//   this.acceleration = function(value){
//   if(value<0){
//     return false;
//   }  
//   this.speed +=value;
//   if(this.speed>this.maxSpeed){
//     this.speed = maxSpeed;
//   }
//   return this.speed;
//   };
//   this.deacceleration = function(value){
//     if(value<0){
//       return false;
//     } 
//     this.speed -=value;
//     if(this.speed<0) {
//       this.speed = 0;
//     }
//     return this.speed;
//     };
//   this.stop = function(){
//     return(this.speed=0);
//   };  
// };
// const car = new Auto('BMW', 250);

function CoffeeMachine(brand, maxVolume){
  this.brand = brand;
  this.maxVolume = maxVolume;
  this.volume = 0;
  this.addWater = function(value){
    if(value>this.maxVolume){
      value = this.maxVolume;
    }
    this.volume = value
  }
  this.makeCoffee = function(value){
    if(value>this.volume){
      return false;
    }
    this.volume -= value;
  }
}
const delongi = new CoffeeMachine('delongi', 500);
delongi.addWater(300);
console.log(delongi.volume);
console.log(delongi.makeCoffee(400));
console.log(delongi.volume);

