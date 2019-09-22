// let x = document.getElementById("myDIV");
// let node = document.querySelector("h4").innerHTML = "Hello!!";

// node.innerHTML("ssss");



const h4 = document.querySelector('h4');
const text = document.createElement('span');
text.textContent = "jakiś tekst";
h4.appendChild(text);