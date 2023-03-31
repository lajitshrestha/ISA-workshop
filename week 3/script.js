// ---------1----------
// function area(a,b){
//     return((a*b)/2)
// }
// let num = area(3,2)
// console.log(`area is ${num}`)

// -------2------
// function returnme(a){
//     return(`something  ${a}`)
// }
// let returning_value = returnme('is better than nothing')
// console.log(returning_value)

// -----3-------

// function sum(point2, point3){
//     return(point2*2 + point3*3)
// }
// let total_sum = sum(1,1)
// console.log(total_sum)

// ---------4-------

// function lessormore(a,b){
//     if((a+b)<100){
//         return true
//     }
//     else
//     return false
// }

// let num_check = lessormore(22,15)
// console.log(num_check)

// -----5-----
// sum = 0;
// function sum_up(a){
//     while(a != 0){
//         sum = sum + a;
//         a--;
//     }
//     return sum

// }
// let total_sum = sum_up(4)
// console.log(total_sum)

// ----------6----------
// sum = 0;
// function checknum(a){
//     for(i=0; i <a; i++){
//         num = a % 10;
//         sum = sum + num
//         a = a/10
//     }
//     if(sum%2 ==0){
//         return('evenish')
//     }
//     else
//     return('oddish')
// }
// let thrownum = checknum(60)
// console.log(thrownum)


// -------7---------
// function checkprime(a, b) {
//     for (let i = a; i <= b; i++) {
//       let remainder = 0;
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) {
//           remainder = 1;
//           break;
//         }
//       }
//       if (i <= 1 || remainder ==0) {
//         return true;
//       }
//     }
//     return false;
//   }
  
//   let num = checkprime(8,10);
//   console.log(num); 



// -------8---------

// function shifter(x,y){
//     return(x*(Math.pow(2,y)))
// }
// let sum = shifter(5,2)
// console.log(`sum is ${sum}`)
  

// --------9--------
function binary(a) {
    let list1 = [];
    let remainder = 0;
    while (a > 0) {
      remainder = a % 2;
      list1.push(remainder);
      a = Math.floor(a / 2);
    }
    return list1.reverse();
  }
  
  let number = binary(10);
  console.log(number); 
  