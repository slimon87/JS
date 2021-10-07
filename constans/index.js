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

const rabbit = {
  color: 'white',
  jump: function(){
    return 'I am jump';
  },
}
const rabbitDom = {
  name: 'Buny',
  pet: function(){
    return "Pet me";
  }
}

const rabbitMagic =  {
  say: function(word) {
    return word;
  }
}

rabbitDom.__proto__ = rabbit;
rabbitMagic.__proto__ = rabbitDom;

console.log(rabbitMagic.say('Hello, I am Magic rubbit'));
console.log(rabbitMagic.pet());
console.log(rabbitMagic.jump());


