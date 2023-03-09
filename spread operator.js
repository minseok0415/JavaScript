//spread operator
let contacts =["Mary", "Joel", "Danny"];
contacts.push("Steve");
//let personalFriends = ["David",
//                        "Mary", "Joel", "Danny",
//                        "Lily"];
let personalFriends = ["David",
                        ...contacts,
                        "Lily"];
contacts.push("John");
console.log(personalFriends);

let person = {
  name: 'Adam',
  age: '25',
  city: "Manchester"
};
let employee = {
  ...person,
  salary: 50000,
  position: "Software Developer"
};
console.log(employee)

//challenge
const shoppingList = ['eggs', 'milk', 'butter'];
//bread, pasta, steak를 충동적으로 구매함
const boughtList = [...shoppingList,
                    'bread', 'pasta', 'steak'];
console.log(boughtList);