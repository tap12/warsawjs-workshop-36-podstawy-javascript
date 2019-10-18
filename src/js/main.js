// let DOM_text_form = document.createElement('span');

const h4 = document.getElementById('root');
const DOM_text_form = document.createElement('span');
DOM_text_form.textContent = "jakiś tekst\n\n";
h4.appendChild(DOM_text_form);



let button_jakis = document.createElement('button');
button_jakis.textContent = "Naciśnij mnie!";
h4.appendChild(button_jakis);


let zmieniany_tekst = "test 123!";

button_jakis.addEventListener("click", clickFunction);

function clickFunction() {
    button_jakis.textContent = zmieniany_tekst;
    myFunction();
}


function myFunction() {
    var x = document.getElementById("myAudio");
    x.play();
    // document.getElementById("demo").innerHTML = x;
}