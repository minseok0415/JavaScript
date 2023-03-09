//rest parameters
//function logging(nums) {
//  console.log(nums);
//}
//logging(4)  //4
//logging(4,5)//4

//function logging(nums, nums2) {
//  console.log(nums, nums2);
//}
//logging(4)  //undefined
//logging(4,5)//4 5

function logging(nums) {
    console.log(arguments);
}
logging(4,5,6,7)  //object

function logging2(...nums) {
    console.log(nums);
}
logging2(4,5,6,7)  //array