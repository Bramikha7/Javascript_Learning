arr=[1,2,3,4,5]
for (let i=0;i<arr.length;i=i+1){
    console.log(arr[i])
}

for (let el in arr){
    console.log(el)
}

for (let el of arr){
    console.log(el)
}
// option 1
var a=[1,2,3]
var b=["a","b","c"]

var result=[...a,...b];
console.log(result)

// Option 2
var new_list=[]
for (let i=0;i<a.length;i=i+1){
    new_list.push(b[i]);
}
for (let j=0;j<b.length;j=j+1){
    new_list.push(a[j]);
}
console.log(new_list)

var UserDetails={
    name:"Tony Stark",
    occupation:"Iron Man-Avengers"
}

var skills={
    skill:["Businessman","Philantropist"],
    networth:20000000
}
var superHero={
    ...UserDetails,
    ...skills
}
console.log(superHero)

// var marks=[98.96,"A","B","C"]
// var english=marks[0]
// var tamil=marks[1]
// var grades=marks.slice(2,5);
// let [english, tamil,...grades]=marks
// console.log(marks)

let user={name:"John",years:38}
var results={...user,isAdmin:true}
console.log(results)

let{name,years}=results
console.log(name)
console.log(years)

const response={
    username:"john",
    token:"abc123",
    role10:"admin",
    profile:"manager"
}
// create Element
// class list amd style
// closures