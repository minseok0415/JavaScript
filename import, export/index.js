//import, export
import { data } from "./example";
import { add } from "./data";

let updatedData = data;
updatedData.push(5);
console.log(updatedData);

//challenge
//data.js라는 파일을 만들고
//그 파일 밑에 두 파라미터를 가지는 함수를 만든다
//함수의 이름은 add이다
//두 파라미터를 더해서 리턴한다
//함수를 export해서
//index.js에서 사용한다

let result = add(3, 2);
console.log(result);