//radius
// var radius = 5;
// console.log(radius);
//string
// console.log("Hello World");
// //area
// var area = (22/7)*5*5
// console.log(area)
// //var
// var a = 10;
// var b = 20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// //bool
// var userStatus = true;
// console.log(userStatus);
// userStatus = false;
// console.log(userStatus)
// //null
// var myStatus = null;
// console.log(myStatus);
// myStatus = "CLOSED";
// console.log(myStatus);
// //undefined
var markSheet;
console.log(markSheet);
var age = 19;
if (age > 18) {
    console.log("eligible")
}else if (age < 18) {
    console.log("not eligible")
}else{
    console.log("invalid input")
}
var x = 41
if (x%2==0) {
    console.log("even number")
}else if (x%2!=0) {
    console.log("odd number")
n = 1;
}
while (n <= 29){
    if (n%2!=0){
        console.log(n);
    }
    n = n+1
}
var x = "15";
var y = parseInt(x)
console.log(y)
var amount = 1000
var z = String(amount)
console.log(z, typeof amount, typeof z)
var y = Number(z)
console.log(y, typeof y)
var password = "a234fd"
console.log(Number(password))
parseFloat
// pi value
// variable name is PI
// variable value is 22 / 7
const PI = 22 / 7;
console.log(PI); // 3.142857142857143
console.log(parseInt(PI)); // 3
console.log(parseFloat(PI)); // 3.142857142857143
console.log(parseInt(36 / 6)); // 6 -> 6
console.log(parseInt(2 / 2)); // 1 -> 1
console.log(parseInt(22 / 2)); // 11 -> 11
console.log(parseInt(9 / 90)); // 0.10 -> 0
// parseFloat
console.log("demo for parsefloat")
console.log(parseFloat(36 / 6)); // 6 -> 6
console.log(parseFloat(2 / 2)); // 1 -> 1
console.log(parseFloat(22 / 2)); // 11 -> 11
console.log(parseFloat(9 / 90)); // 0.10 -> 0
console.log(parseFloat(PI).toFixed(4))
function areaOfRectangle(length,breath){
    let area = length * breath
    return area
}
console.log(areaOfRectangle(20,30))
function perimeterOfRectangle(length,breath){
    let perimeter = 2 * (length + breath)
    return perimeter
}
console.log(perimeterOfRectangle(5,10))
let addTwoNums = function(x,y) {
    let sum = x + y;
    return sum;
};
console.log(addTwoNums(2,3))
let areaOfRectangle = function(length,breath){
    let area = length * breath
    return area
}
console.log(areaOfRectangle(20,30));