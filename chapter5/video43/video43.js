console.log('video43')

const person = {
    name1: 'thiendang',
    age: 25,
};

console.log('person:', person)

//get data
console.log(`person's age:`, person.age)
console.log(`person's name:`, person.name1)
console.log(`person's name:`, person['name1']) //same

//add new data
person.address = "Bienhoa"
console.log('person new add:', person)

//delete data
delete person.name1
console.log('person delete name:', person)