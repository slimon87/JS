const result = +prompt('Enter month');

switch(result){
  case 1:
  case 2:
  case 12: 
    console.log("Now is winter");
    break;
  case 3:
  case 4:
  case 5: 
    console.log("Now is spring");
    break;
  case 6:
  case 7:
  case 8: 
    console.log("Now is summer");
    break;
  case 9:
  case 10:
  case 11: 
    console.log("Now is fall");
    break;
  default:
    console.log('Invalid data');
    break;
}