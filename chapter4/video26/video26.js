console.log("video 26");


// // dùng if else khi có hai trường hợp xảy ra
// age = prompt("Enter your age: ");
// console.log("Your age is " + age);

// if (age >= 18) {
//     // condition is true
//     console.log('enjoy your pornhub');
// } else {
//     // condition is false
//     console.log('go back to school');
// };

// dùng if else if else khi có nhiều hơn hai trường hợp xảy ra
console.log('Xếp hạng học lực của bạn: ');
score = prompt("Enter your score: ");
console.log("Your age is " + score);

if (score >= 8) {
    console.log('Giỏi');
} else if (score >= 6 && score < 8) {
    console.log('Khá');
} else if (score >= 4 && score < 6) {
    console.log('Trung bình');
} else {
    console.log('Yếu');
};