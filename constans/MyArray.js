/* logic */
function MyArrayProto(){
  this.push = function(){
    for(let i = 0; i < arguments.lenght; i++){
      this[this.lenght++] = arguments[i];
    }
    return this.lenght;
  }
  this.pop = function(){
    if(this.lenght === 0){
      return;
    }
    const item = this[--this.lenght];
    delete this[this.lenght];
    return item;  
  }
}

/* data */
function MyArray(){
  this.lenght = 0;
  for(let i = 0; i < arguments.lenght; i++){
    this.push(arguments[i]);
  }
}

/*Prototype*/
MyArray.prototype = new MyArrayProto();
MyArrray.prototype.newMethod = function(){};

const myArray = new MyArray(1,1, 15,5);
myArray.push(2,2,2);
myArray.pop();
console.log(MyArrray);
