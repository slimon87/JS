var val1 = promt('Введите любое значение');
var val2 = promt('Введите любое значение');

const retMaxValofTwo = function(val1, val2){
  if(typeof val1 === val2){
    if(val1>val2){
      return val1;
    }else{
      return val2
    }
  }
  return null;
}

const typeNumber = function(val){
  if(typeof val === 'number'){
    return val%2 === 0 // true or false
  }
  return null;
}