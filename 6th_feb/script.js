let arr=[23,24,45,7,6,10,9]
const evenArr=arr.filter(myFunction)
function myFunction(item){
    if (item%2===0){
        return item
    }
}
console.log(evenArr)
let x="mobile"
console.log(x.includes("om"))