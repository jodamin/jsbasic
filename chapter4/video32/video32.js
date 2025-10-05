//keyword "return"
const welcome = (firstname, lastname, id) => {
    return `Welcome ${firstname} ${lastname} to my holetell, your ID is ${id}
Hope you enjoy your stay
  `;
}

console.log(welcome("John", "Doe", 12345));

//return giong break va console.log
const square = (diem) => {
    let heso = 3.5;
    if (typeof diem !== 'number') {
        console.log('run this first');
        console.log('diem phai la so');
        return; //dung return de ket thuc ham, giong nhu break;
    }
    console.log('run this second');
    return diem * heso; //muốn in dòng này phải dùng console.log ở ngoài
};
console.log('Diem cua ban la:', square(9));