// while(true){
//   const password = prompt('Enter password');
//   if(password === GOOD_PASSWORD){
//     alert('Thanks');
//     break;
//   }
// }



let i=0;
while(i<=MAX_COUNT_TRY){
  i++;
  const password = prompt('Enter password');
  if(password === GOOD_PASSWORD){
    alert('Thanks');
    break;
  }
  if (i === MAX_COUNT_TRY){
    console.log('You tryed three try' )
  }
}

