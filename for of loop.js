//for of loop
let incomes = [6200, 6700, 7500];
let total = 0;
for (const income of incomes) {
  console.log(income);
  total += income;
}
console.log(total);

let fullName = 'Dtlan Coding God Isreal';
for (const char of fullName){
  console.log(char);
}

//challenge
//use for of loop
//ex) Tom lives in Lisbon
const students = [
  { name: 'John', city: 'New York' },
  { name: 'Peter', city: 'Paris' },
  { name: 'Kate', city: 'Sidney' }
];
for (const student of students){
  console.log(`${student.name} live in ${student.city}`);
}
for (const {name, city} of students){
  console.log(`${name} live in ${city}`);
}