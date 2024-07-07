// // 12a
// const add = function(){
//     console.log(2 +3);
// }

// add();
// add();

// // 12b
// function runTwice(fun){
//     fun();
// }

// runTwice(function(){
//     console.log('12b');
// });

// runTwice(add);

// 12c and 12d
// let startButton = document.querySelector('.start-button');

// startButton.addEventListener('click', ()=>{
//     startButton.innerHTML = 'Loading...';
//     setTimeout(()=>{
//         startButton.innerHTML = 'Finished!';
//     },1000);
// });

// //12e
// let addToCartButton = document.querySelector('.add-to-cart');
// let display = '';
// let cartId;

// addToCartButton.addEventListener('click',()=>{
//     document.querySelector('.added-info').innerHTML = 'Added';
//     setTimeout(()=>{
//         document.querySelector('.added-info').innerHTML = '';
//     },2000);

//     clearTimeout();
// });

// 12g
// let titlePage = document.querySelector('.page-title');
// counter = 0;
// setInterval(function(){
//     counter +=1;
//     titlePage.innerHTML = `(${counter}) New messages`;
// },1000);


//12h
// let titlePage = document.querySelector('.page-title');
// let counter = 0;
// let addButton = document.querySelector('.add-button');
// let removeButton = document.querySelector('.remove-button');

// addButton.addEventListener('click', () => {
//     counter++;
//     updateTitle();
// });

// removeButton.addEventListener('click', () => {
//     if (counter > 0) {
//         counter--;
//         updateTitle();
//     }
// });

// function updateTitle() {
//     if (counter === 0) {
//         titlePage.innerHTML = 'App';
//     } else {
//         titlePage.innerHTML = `(${counter}) New messages`;
//     }
// }

// // Initialize the title page content
// updateTitle();
