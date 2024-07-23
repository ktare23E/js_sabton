// 11a
// const myArrays = [10,20,30];
// myArrays[myArrays.length-1] = 99;
// console.log(myArrays);

// 11b
// function getLastValue(myArrays){
//   return myArrays[myArrays.length - 1];
//     // for(let i = 0; i < myArrays.length; i++){
//     //     return myArrays[myArrays.length-1];
//     // }
// }

// console.log(getLastValue(myArrays));

// const myArrays = ['Kristian','Jade','Hazel'];
// console.log(getLastValue(myArrays));


//11c

// function arraySwap(myArrays){
//     if(myArrays.length >= 2){
//         let temp = myArrays[0];
//         myArrays[0] = myArrays[myArrays.length-1];
//         myArrays[myArrays.length-1] = temp;
//         return myArrays;
//     }else{
//       return "You need an array with more than 2 length";
//     }
// }

// let myArr = [1];


// console.log(arraySwap(myArr));

// 11d
// for(let i = 0; i<=10; i+=2){
//     console.log(i);
// }

// 11e
// for(let i = 5; i>=0; i--){
//     console.log(i);
// }

// let i = 5;
// while(i >= 0){
//     console.log(i);
//     i--;
// }

// 11g
// let myArrays = [1,2,3];
// const numberPlusOne = [];

// for(let i = 0; i < myArrays.length; i++){
//     numberPlusOne.push(myArrays[i] + 1);
// }

// console.log(numberPlusOne);

// function addOne(array){
//     const newArray = [];
//     for(let i = 0; i < array.length; i++){
//         newArray.push(array[i] + 1);
//     }
//     return newArray;
// }

// let myArrays = [-1,0,2];

// console.log(addOne(myArrays));

// function addNum(array,num){
//     const newArray = [];
//     for(let i = 0; i < array.length; i++){
//         newArray.push(array[i] + num);
//     }
//     return newArray;
// }

// let myArrays = [1,2,3];
// console.log(addNum(myArrays,2));

// 11j add 2 arrays trapping an empty array and imbalance length
// function addTwoArrays(array1,array2){
//     let newArray = [];
//     let maxNumber = Math.max(array1.length,array2.length);

//     if(array1.length === 0 || array2.length === 0 ){
//         return "cannot be empty array"; 
//     }else{
//         for(let i = 0; i < maxNumber; i++){
//           let value1 = array1[i] !== undefined ? array1[i] : 0;
//           let value2 = array2[i] !== undefined ? array2[i] : 0;
//           newArray.push(value1 + value2);
//         }

//         return newArray;
//     }

    
// }

// let myArrays = [2,4,5];
// let myArrays2 = [1,2,2,5,10];
// console.log(addTwoArrays(myArrays,myArrays2));




//11k return all the greater than 0 
// function positiveNumber(array){
//     let count =0;
//     for(let i = 0; i < array.length; i++){
//         if(array[i] > 0){
//             count++;
//         }
//     }
//     return count;
// }

// let myArrays = [4,-2,2,17,-92,-27];
// console.log(positiveNumber(myArrays));

// 11l and 11m
function findSmallestAndLargest(arr) {

    
    let smallest = arr.length !== 0 ? arr[0] : null;
    let largest = arr.length !== 0 ? arr[0] : null;

    

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        } else if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    const myObject = {
        smallest,
        largest
    }

    return myObject;
}

let myArrays = [3]
console.log(findSmallestAndLargest(myArrays));

// 11n count words
// function countWords(arr) {
//   const wordCount = {};

//   for (let i = 0; i < arr.length; i++) {
//     const word = arr[i];
//     // if (wordCount[word]) {
//     //     wordCount[word]++;
//     // } else {
//     //     wordCount[word] = 1;
//     // }
//     console.log(wordCount[word]);
//   }

 

//   return wordCount;
// }
  
// let myStringArrays = ['apple','apple','apple','apple','apple'];

// console.log(countWords(myStringArrays));

