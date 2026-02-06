let marks = [88, 98, 87, 91, 74];
// to find the total marks using reduce method
// let totalMarks = 0;
// totalMarks = marks.reduce((acc, element) => {
//     let temp = acc + element;
//     return temp;
// }, 0);
// console.log(totalMarks)

// temperature
let temperature=[87,91,85,84,89]

let maxTemp=temperature[0];
for (let i=0;i<temperature.length;i=i+1){
    if (temperature[i]>maxTemp){
        maxTemp=temperature[i];
    }
}
console.log(maxTemp)

maximumTemp=temperature.reduce((acc,element)=>{
    if(element>acc){
        return element;
    }else{
        return acc;
    }
})
console.log(maximumTemp)

// filter by numbers divisible by 3

let num=[3,7,12,18,21]

let new_num=num.filter((eachNum)=>{
    let result=0;
    if (eachNum%3==0){
        result=eachNum;
    }
    return result;
})
console.log(new_num)

// filter the ages above 18

let age=[12,18,21,14,25,16,30]

let new_age=age.filter((eachAge)=>{
    let new_res=0;
    if (eachAge>18){
        new_res=eachAge;
    }
    return new_res
})
console.log(new_age)

// add MR. in front of the each name

let names=["John","Steve","Ravi"]
let new_name=names.map((eachName)=>{
    return "Mr."+eachName;
})
console.log(new_name)

let fruits=[7,9,10,4]

maxFruit=fruits.reduce((acc,element)=>{
    if (element<acc){
        return element
    }else{
        return acc
    }
})
console.log(maxFruit)

// user
// login
// products
let myProduct = {
    name: 'blue denim jean',
    productId: 100,
    price: 2500,
    description: 'test',
    availability: true
};
// print entire object
console.log(myProduct);
// print the description value alone
// ?? option 1
console.log(myProduct['description']);
// !! option 2
console.log(myProduct.description);
// print only the keys
console.log(Object.keys(myProduct));
for (let key of Object.keys(myProduct)) {
    console.log(key);
}
// print only the values
console.log(Object.values(myProduct));
for (let value of Object.values(myProduct)) {
    console.log(value);
}







