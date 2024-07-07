//12j
// const multiply = (param1,param2) => {
//     return param1 * param2;
// };

// console.log(multiply(2,3));

//12k
// const multiply = (param1,param2) => param1 * param2;
// ;

// console.log(multiply(2,3));

//12L
// const countPositive = (array) =>{
//     let count = 0;
//     array.forEach((value)=>{
//         if(value > 0){
//             count++;
//         }
//     });
//     return count;
// }

// const myArray = [1,-5,-2,-3,5,3];
// console.log(countPositive(myArray));

// 12M
    // const addNum = (array,num) =>{
    //     return array.map((value) => value + num);
    // }

    // const myArray = [1,2,3];
    // console.log(addNum(myArray,2));

//12n
    // const removeEgg = (foods) =>{
    //     return foods.filter((value) => value !== "egg")
    // };

    // let myFoods = ["egg","bacon","cheese",'egg','eggsandwich'];
    // console.log(removeEgg(myFoods));

//12o
const removeFirstTwoEggs = (array)=>{
    let eggCount = 0;
    return array.filter((value) => {
        if(value === "egg" && eggCount < 2){
            eggCount++;
            return false;
        }else{
            return true;
        }
    });
}

let myFoods = ["egg","bacon",'egg',"cheese",'egg','eggsandwich'];
console.log(removeFirstTwoEggs(myFoods));