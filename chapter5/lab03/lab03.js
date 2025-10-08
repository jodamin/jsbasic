console.log('lab03')

const sp1 = {
    nameis: 'BaoCaoSu',
    price: '128 Dollars',
    inStock: true
};

const sp2 = {
    nameis: 'SexToyGai',
    price: '800 Dollars',
    inStock: true
};

const sp3 = {
    nameis: 'GelBoiTron',
    price: '46 Dollars',
    inStock: false
};

const sp4 = {
    nameis: 'BaoCaoSu',
    price: '33 Dollars',
    inStock: false
};

const sp5 = {
    nameis: 'Rocket24H',
    price: '2567 Dollars',
    inStock: true
};

const products = [sp1, sp2, sp3, sp4, sp5]

//practice
console.log('all product:', products)

//show name of first product
let firstproduct = products[0]
console.log('first name product:', firstproduct.nameis)

console.log('---------------------------------')
// change the price of second product to 150
sp2.price = '150 Dollars'
console.log('price sp 2 after is:', sp2.price)

console.log('---------------------------------')
//add new product in last locate
products.push(sp6 = {
    nameis: 'BitMatCucDam',
    price: '90 Dollars',
    inStock: true
})
console.log('all products after add one:', products)

console.log('---------------------------------')
//remove last product
products.pop()
console.log('all product after remove last one:', products)

console.log('---------------------------------')
//use forEach to show all product
products.forEach((item, index) => {
    console.log(`product ${index + 1}:`, item.nameis)
});

console.log('---------------------------------')
//use map() to create new array just contain price
const justPrice = products.map((item, index) => {
    return item.price
});
console.log(justPrice)

console.log('---------------------------------')
//filter() to pop which is false in inStock
let justTrue = products.filter((item) => item.inStock === true)
console.log('sp con hang:', justTrue)

console.log('---------------------------------')
//use for in to show type of first product
for (let key in sp1) {
    console.log(key, ':', sp1[key])
}