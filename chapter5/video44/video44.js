console.log('vide44')

const per1 = {
    name1: 'Cuto',
    score: 10,
};

const per2 = {
    name1: "Cacbu",
    score: 9.23
};

const per3 = {
    name1: "Cacbuchaba",
    score: 10.00001
};

const sinhvien = [per1, per2, per3];
console.log(">>> check sinh vien:", sinhvien)

// sinhvien.forEach((item, index, array) => {
//     console.log('check index:', index, 'check name sinhvien:', item.name1)
// });

//vong lap for in
for (let key in per3) {
    console.log(key, per3[key])
};

console.log('-----------------------------')

//vong lap for of
for (let value of Object.values(per2)) {
    console.log(value)
}

console.log('-----------------------------')


//dung object.entries
for (let [key, value] of Object.entries(per1)) {
    console.log(key, value)
}