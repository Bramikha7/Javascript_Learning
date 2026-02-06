let inputBox=document.getElementById("card")
let inputBox2=document.getElementById("name1")
console.log(inputBox2)
let button1=document.getElementById("btn")

button1.addEventListener("click",()=>{
    var input=inputBox2.value
    var words=input.split(",")
    console.log(words)
    for (let i=0;i<words.length;i=i+1){
        let card=document.createElement("div")
        card.style.border="1px solid black"
        card.style.borderRadius="8px"
        card.style.padding="10px"

            
    }
})

