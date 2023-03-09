const player = {
    name: "Lebron James",
    club: "LA Lakers",
    address: {
        city: "LA"
    }
};

console.log( player.address.city );

//destructuring
const { name, club, address: { city } } = player;
console.log( city, club );

//template literal
console.log( `Hello ${name}` );

//challenge
//destructuring과 template literal을 사용하여
//콘솔에 '나는 강민석이고 나이는 18살이며 ~~~프로젝트를 만듭니다.' 출력하기
const student = {
    sName: 'minseok Kang',
    age: 18,
    projects : {
        diceGame : "Two player dice game using JavaScript"
    }
};

const { sName, age, projects: { diceGame } } = student;
console.log( `나는 ${sName}이고 나이는 ${age}살이며 ${diceGame} 프로젝트를 만듭니다.` );

//array destructuring
let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Isreal'];
console.log(firstName, middleName, lastName);
lastName = 'Clements';
console.log(firstName, middleName, lastName);