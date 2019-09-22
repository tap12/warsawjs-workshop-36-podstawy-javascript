// let number = prompt('Let give me some number?', '');

// if (number > 0) {
//     alert('1');
// } else if (number < 0) {
//     alert('-1');
// } else {
//     alert('0');
// }



// let a = 1;
// let b = 2;

// if (a + b < 4) {
//     result = 'Za mało';
// } else {
//     result = 'Za dużo';
// }

// (a + b) < 4 ? { result = 'Za mało' } : { result = 'Za dużo' };


// let a = +prompt('a?', '');

// switch (a) {
//     case 0:
//         alert(0);
//         break;

//     case 1:

//     case 2:
//     case 3:
// }


// for (let i = 0; i < 100; i++) {
//     console.log('Warsztaty WarsawJS są świetne!');
// }


// const obj = {name: 'Tom', surName: 'Doe', age: 223}

// for (const prop in obj) {
//     console.log();

// }


let string_star = "*";

for (let k = 0; k < 6; k++) {
    string_star = string_star + "*";
}

console.log(string_star);


let i = 0;
// while (i < 3) {
//     alert(`number ${i}`);
//     i++;
// }




let animals = ['🐔', '🐷', '🐑', '🐇'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

let xxx=0;
for (let wartosc of animals) {
    // wartosc = { wartosc: names };
    animals[wartosc] = names[xxx];
    xxx+=1;
}

console.log(animals);



for (let animal of animals) {
    index = Math.floor(Math.random() * names.length);
    console.log(`${names[index]} the ${animal}`)
}


for (const value of animals) {
    let i = animals.indexOf(value);
    console,log(`${value} Nazwa tego zwierzecia to: ${names[i]}`)
}