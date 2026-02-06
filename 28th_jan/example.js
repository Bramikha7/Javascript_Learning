console.log("Hello world")
var myDiv=document.createElement("div")
myDiv.style.width="500px";
myDiv.style.height="500px";
myDiv.style.border="1px solid black";
myDiv.style.backgroundColor="cornflowerblue";
myDiv.style.borderRadius="8px";
myDiv.style.color="white";
myDiv.style.fontSize="25px";
myDiv.style.display="flex";
myDiv.style.justifyContent="center"
myDiv.style.alignItems="center"

var content="Welcome to JavaScript"
myDiv.innerHTML=`<h1>${content}</h1>`
document.body.appendChild(myDiv)