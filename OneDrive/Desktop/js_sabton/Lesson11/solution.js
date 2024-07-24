// 11o and 11p that has break then 11q
// function arraySearch(array,searchString){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === searchString){
//             return i;
//         }
//     }
//     return -1;
// }

// const myStringArrays = ['nice','hello','has','hazel'];
// const searchString = 'wow';
// console.log(arraySearch(myStringArrays,searchString));

//11p
// function arraySearch(array,searchString){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === searchString){
//             console.log(i);
//             break;
//         }
//     }
//     return -1;
// }

// const myStringArrays = ['nice','hello','has','hazel'];
// const searchString = 'hello';
// arraySearch(myStringArrays,searchString);


// 11q

// function searchString(arr,str){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === str){
//             return i;
//         }
//     }
//     return -1;
// }

// let myArr = ["hello","world","test"];

// console.log(searchString(myArr,"test"));


// 11r
// function removeEgg(foods){
//     let result = [];
//     for(let i = 0; i < foods.length; i++){
//         if(foods[i] === 'egg'){
//             continue;
//         }
//         result.push(foods[i]);
//     }
//     return result;
// }

// const foods = ['egg','egg','ham','egg','bacon'];
// console.log(removeEgg(foods));

// 11s
// function updateRemoveEgg(foods){
//     let result = [];
//     let eggCount = 0;
//     for(let i = 0; i < foods.length; i++){
//         if(foods[i] === 'egg'){
//             if(eggCount < 2){
//                 eggCount++;
//             }else{
//                 result.push(foods[i]);
//             }
//         }else{
//             result.push(foods[i]);
//         }
//     }
//     return result;
// }

// const foods = ['egg','burger','egg','ham','egg','bacon','egg'];
// console.log(updateRemoveEgg(foods));

// 11t and 11u
// function reverseRemoveEgg(foods){
//     let result = [];
//     let eggCount = 0;
//     let foodReverse = foods.reverse();

//     for(let i = 0; i < foodReverse.length; i++){
//         if(foods[i] === 'egg' && eggCount < 2){
//             eggCount++;
//             continue;
//         }
//         result.push(foods[i]);
//     }
//     return result.reverse();
// }

// const foods = ['egg','burger','ham','egg','bacon','egg','egg','starbucks'];
// const reserveOriginal = foods.slice();
// console.log(reverseRemoveEgg(foods));


//11t

// function reverseRemoveEgg(foods){
//     let result = []; 
//     let count = 0;

//     for(let i = foods.length - 1; i >= 0 ; i--){
//         if(foods[i] === 'egg'){
//             if(count < 2){
//                 count++;
//                 continue;
//             }else{
//                 result.push(foods[i]);
//             }
//         }else{
//             result.push(foods[i])
//         }
//     }
    

//     return result.reverse();
// }

// let foods = ['egg','ham','bacon','egg','hotdog','egg'];
// console.log(reverseRemoveEgg(foods));


//11u

// function reverseRemoveEgg(foods){
//     let result = []; 
//     let count = 0;

//     for(let i = foods.length - 1; i >= 0 ; i--){
//         if(foods[i] === 'egg'){
//             if(count < 2){
//                 count++;
//                 continue;
//             }else{
//                 result.push(foods[i]);
//             }
//         }else{
//             result.push(foods[i])
//         }
//     }
    
//     let copyResult = result.slice();

//     return copyResult.reverse();
// }

// let foods = ['egg','ham','bacon','egg','hotdog','egg'];
// console.log(reverseRemoveEgg(foods));
// console.log(foods);


// 11v
// for(let i = 1; i <= 20; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz');
//         continue;
//     }else if(i %  3 === 0){
//         console.log('Fizz');
//         continue;
//     }else if(i % 5 === 0){
//         console.log('Buzz');
//         continue;
//     }
    
//     console.log(i);
// }


// 11w  
// function noDuplicate(array){
//     let result = [];
//     for(let i = 0; i < array.length; i++){
//         if(result.includes(array[i])){
//             continue;
//         }
//         result.push(array[i]);
//     }
//     return result;
// }

// const myColors = ['red','red','green',1];
// console.log(myColors.includes(1));
// console.log(noDuplicate(myColors));