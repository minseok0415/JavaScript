//let / var / const
if (false) {
    var example = 5; //전역 범위 선언
}
console.log(example); //undefined

if (false) {
    let example2 = 5; //블록 범위 선언
}
//console.log(example2); //error

const example3 = 5;
//example3 = 10; //error, 재할당 / 재선언 불가
console.log(example3);

const example4 = [];
example4.push(5); //재할당 / 재선언이 아니기 때문에 가능
console.log(example4);

const example5 = {};
example5.firstName = "Dylan";
console.log(example5); //재할당 / 재선언이 아니기 때문에 가능  