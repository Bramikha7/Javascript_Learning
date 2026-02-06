// callback
function first(a,b, callb){
    sum=a+b
    callb(sum)
} 
function second(sum){
    console.log(sum)
}
first(5,6,second)

// forEach
const fruits=["apple","orange","cherry","banana","mango"]
fruits.forEach(myFunction)

function myFunction(item){
    console.log(item)
}