let fruitList = 'watermelons'

let getFruit = (fruit) =>{
    return new Promise((resolve,reject)=>{
        if(fruit != fruitList){
            setTimeout(()=>{
                resolve(console.log(`here is your ${fruit}`));
            },1000);
        }
        else
        setTimeout(()=>{
            reject(console.log("sorry we're out of watermelons"));

        },2000);

    });
}
let useInput = prompt('enter the fruit');
getFruit(useInput);