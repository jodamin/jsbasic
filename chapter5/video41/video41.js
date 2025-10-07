console.log('video41')

let ageList = [81, 13, 14, 8, 50, 33, 19];

let agex2 = ageList.map((item) => item * 2);

let ageGreaterThan18 = ageList.filter((item) => {
    return item > 18
});

console.log('original:', ageList)
console.log('map() item x 2:', agex2)
console.log('filter() item > 18:', ageGreaterThan18)

//map() khi dùng điều kiện trong return, vd: item > 18, nó sẽ
// xét từng phân tử xem true hay false và trả ra kết quả (là true, fale) của từng phân tử ấy

//filter() cũng xét nhưng chỉ trả lại giá trị (là giá trị của phần tử) mà phần tử true