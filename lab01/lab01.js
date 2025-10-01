console.log('video23 this is lab1')

//khai báo biến
let fullName = 'Dang Minh Thien';
let birthYear = 2006;
let isStudent = true;

//lấy năm hiện tại
const today = new Date();
const currentYear = today.getFullYear();
console.log('Current year:', currentYear, 'typeof:', typeof currentYear);

//tính tuổi
const myAge = currentYear - birthYear;

//in ra thông tin: tên, năm sinh, có phải học sinh không
console.log(
    `Name: ${fullName}
Age: ${birthYear}
Student: ${isStudent}
    `);