//arrow function
//anonymous function
const lunchMenu = function() {
    return "I'm going io eat pizza for lunch";
};
console.log(lunchMenu());

//arrow function
//const dinnerMenu = (food) => {
//  return `I'm going to eat a ${food} for dinner`;
//}
//const dinnerMenu = (food = 'burger') => `I'm going to eat a ${food} for dinner`;
const dinnerMenu = food => `I'm going to eat a ${food} for dinner`;
console.log(dinnerMenu("chicken"));

//challenge
//콘솔에 출력하는 foodShopping 함수 만들기
//매개변수가 milk면
//"I'm going to buy milk from the grocery shop"
//없으면 something을 사게 만들기
const foodShopping = (food = 'something') => `I'm going to buy ${food} from the grocery shop`;
console.log(foodShopping('milk'));
console.log(foodShopping());