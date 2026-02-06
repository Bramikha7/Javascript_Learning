let text=document.getElementById("text1")
let add=document.getElementById("btn1")
let sub=document.getElementById("btn2")
let reset=document.getElementById("btn3")
let finalNum=document.getElementById("final")
add.addEventListener("click",()=>{
    let temp=finalNum.innerText
    let count=parseInt(temp)
    count=count+1
    finalNum.innerText=count
})

sub.addEventListener("click",()=>{
     let temp=finalNum.innerText
     let count=parseInt(temp)
     count=count-1
     finalNum.innerText=count
})

reset.addEventListener("click",()=>{
     finalNum.innerText=0
})