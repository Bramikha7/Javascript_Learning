marks=[87,91,88,93,81]
var new_mark=marks.map((m)=>{
    let new_marks=m+5;
    return new_marks;
})
console.log(new_mark)

// uppercase

let fruits="apple mango banana"
let new_f=fruits.toUpperCase();
console.log(new_f)

// Array Uppercase
fruits=["apple", "mango", "banana"]
let revfruits=fruits.map((el)=>{
    let x=(el.toUpperCase())
    return x
})
console.log(revfruits)

// string to int

let n=["90","30","17"]
let new_n=n.map((el,index,list)=>{
    console.log(el,index,list)
    let y=parseInt(el)
    return y
})
console.log(new_n)

// greater than

let temperature=[25,24,27,28,26,31]
let output=[]
for(let i=0;i<temperature.length;i=i+1){
    if (temperature[i]>25){
        output.push(temperature[i]);
    }
}
console.log(output)

// filter method

let maxTemp=temperature.filter((eachDay)=>{
    let output=0;
    if (eachDay>25){
        output=eachDay;
    }
    return output;
})
console.log(maxTemp)

// removing the zero from the array

let numbers=[55,26,17,0,23,9,0,81]
let zeroNum=numbers.filter((eachNum)=>{
    let output=0;
    if (eachNum!=0){
        output=eachNum;
    }
    return output;
})
console.log(zeroNum)

//  another method to remove the zero from the array

let num=[55,26,17,23,9,0,81]
let res=[]
for (let i=0;i<num.length;i=i+1){
    if (num[i]!=0){
        res.push(num[i])
    }
}
console.log(res)