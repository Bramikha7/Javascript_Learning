// 1. Basic Array Creation  
//    Create an array of 5 numbers and print the array.

let x=["apple","banana","Mango"]
console.log(x)


// 2. Accessing Array Elements  
//    Create an array of 4 strings. Print the 2nd and 4th elements.

let a=["red","green","black","yellow"]
console.log(a[1],a[3])

// 3. Modifying Array Elements  
//    Create an array of 3 elements. Change the 2nd element to "modified" and print the array.

var word=["red","green","black","yellow"]
word[1]="modified"
console.log(word)

// 4. Array Length  
//    Write a program to print the length of an array containing 7 elements.

var word=["red","green","black","yellow","blue","rose","pink"]
console.log(word.length)

//  Iterating with a `for` loop  
//    Write a program that iterates over an array of numbers and prints each element.

var n=[20,30,40,50,60]
for (let i=0;i<n;i=i+1){
    console.log(i)
}

enum Status {
    Completed, 
    InProgress,
    Rejected
}

// const input = [
{
    img: '',
    title: '',
    description: ''
}]
function getAllImages (input: []) {
    for(const i of input.length){
   input.forEach((config)=>{
    return (
          <div class="campaign-cards">
        <div class="card">
          <img
            src={config.img \\ input[i].img}
            alt="Campaign 1"
          />
          <h3>{config.title}</h3>
          <p>Sparky was found malnousihed and ill, but thanks to our vaccination drive, he's now healthy and thriving in his new</p>
          <a href="#" class="learn-btn"></a>
        </div>
      </div>
    )
   })
}