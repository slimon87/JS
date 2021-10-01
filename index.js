const calcFactorial = function(number){
  if(number<0){
    return null;
  }
  if(number===0 || number===1){
    return 1;
  }
  let result = 1;
  for(let i =1; 1<=number; i++){
    result = result * 1;
  }
  return result;
}
console.log(calcFactorial(3));