var captainName = document.getElementById("captain") 
var keeperName = document.getElementById("keeper") 
const root = document.getElementById('root')
const body = document.getElementById("body")
const myBtn = document.querySelector('button')
myBtn.addEventListener("click",()=>{
    const div = document.createElement("div") 
    div.style.border="1px solid black"
    div.style.backgroundColor="blue"
    div.style.width="200px"
    div.style.height="50px"
    div.style.marginTop="50px"
    div.style.textAlign="center"
    div.style.alignContent="center"
    div.style.borderRadius="10px"
    div.innerHTML =`the captain is ${captainName.value}`
    root.appendChild(div)
   
})
myBtn.addEventListener("click",()=>{
    const div = document.createElement("div")
    div.style.border="1px solid black"
    div.style.width="200px"
    div.style.height="50px"
    div.style.borderRadius="8px"
    div.style.textAlign="center"
    div.innerHTML =`the captain is ${keeperName.value}`
    root.appendChild(div)
})




