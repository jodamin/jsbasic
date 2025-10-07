console.log("Video 40");

let myArray = [1, 2, 3, 4, 5];
console.log('original array:', myArray);


//forEach will use to read data only
// cloneArray.forEach((item, index) => {
//     console.log(`item ${item} at index ${index}`);
// });


//map() will create a clone array and modify it (not change the original array)
let cloneArray = myArray.map((value) => {
    return value + 1
});
console.log('cloned array:', cloneArray);

//cach dung map() ngan hon:
let cloneArray2 = myArray.map(value => value + 1); //same with above
console.log('cloned array 2:', cloneArray2);