// -------a-------


// let fruitList = 'watermelons'

// let getFruit = (fruit) =>{
//     return new Promise((resolve,reject)=>{
//         if(fruit != fruitList){
//             setTimeout(()=>{
//                 resolve(console.log(`here is your ${fruit}`));
//             },1000);
//         }
//         else
//         setTimeout(()=>{
//             reject(console.log("sorry we're out of watermelons"));

//         },2000);

//     });
// }
// let useInput = prompt('enter the fruit');
// getFruit(useInput);


// ----------b-------

// function arraymanuplation(arr, callback1, callback2){
//     let modifiedArray = arr.map(callback1);
//     let filterArray = arr.filter(callback2);
//     return filterArray;
// }

// let number = [7,8,9,4,5,6];

// function multiple(number){
//     return number*2;
// }

// function check_num(number){
//     return number %2 === 0;
    
// }

// let result = arraymanuplation(number,multiple,check_num)
// console.log(result)

// --------c--------



async function fetchUserData(userId) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const user = await response.json();
      const { name, email } = user;
      return { name, email };
    } catch (error) {
      throw new Error(`Error fetching user data: ${error.message}`);
    }
  }
  