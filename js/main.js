// let x = document.getElementById("myDIV");

// let node = document.querySelector("h4").innerHTML = "Hello!!";

// node.innerHTML("ssss");



// const h4 = document.querySelector('h4');
// const text = document.createElement('span');
// text.textContent = "jakiś tekst";
// h4.appendChild(text);




const main = document.querySelector('.main');
const chessboard = document.createElement('section');
chessboard.classList.add('chessboard');
main.appendChild(chessboard);

const board = document.querySelector('.chessboard');


for (let i = 0; i < 64; i++) {
    board.appendChild(document.createElement('div'))
}