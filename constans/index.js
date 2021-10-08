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
function saySomething (howSay, whatSay){
  howSay(whatSay);
}
saySomething(console.log, 'qwerty');

saySomething(comfirm, 'qwerty');

function isEven(n){
  return n%2===0;
}

function isOdd(n){
  return n%2===1;
}