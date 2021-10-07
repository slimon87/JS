// const student = {
//   id:1,
//   firsName:'Elon',
//   lastName:'Mask',
//   age:50,
//   isMale:true,
//   toString: function(){
//     return '${this.firstName} ${this.lastName}';
//   }
// };

// const student2 = {
//   id:2,
//   firsName:'Tim',
//   secondName:'Li',
//   age:65,
//   isMale:true,
// };

function LadderPrototype(){
  this.up = function(){
    this.value++;
    return this //возращает объект и можно использоватьцыпочку вызовов
  } 
  this.down = function(){
    this.value--;
    return this
  }
  this.showStep = function(){
    return this.value
  }
}

function Ladder(){
  this.value = 0
}

Ladder.prototype = new LadderPrototype();
const myLadder = new Ladder();

myLadder.up();
myLadder.up();
myLadder.up();
myLadder.down();
console.log(myLadder.showStep());

const step = ladder1.up().up().up.()up().down().showStep();