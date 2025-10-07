console.log("Video 39");

let Array1 = ['item1', 'item2', 'item3', 'item4', 'item5'];
//duyet mang bang vong lap for
for (let i = 0; i < Array1.length; i++) {
    console.log('the item', i + 1, 'is:', Array1[i]);
};

console.log('-------------------');

//duyet mang bang vong lap forEach
Array1.forEach(function (value, index, array) {
    console.log('value:', value, 'index:', index, 'array:', array);
});

console.log('-------------------');
//ket hop arrow function
Array1.forEach((value, index, array) => {
    console.log('value:', value, 'index:', index, 'array:', array);
});
