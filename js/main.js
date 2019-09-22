// user = {
//     firstName: "John",
//     lastName: "Smith",
//     dateOfBirth: "1985",
//     getName(){
//         return "User's name: " `${this.firstName}` + " " + `${this.lastName}`;
//     }
// }

// console.log(user.getName());


const table = []; //pusta tablica

const tableWithNumbers = [1, 2, 3]; //tablica z 3 liczbami

const tableWithStrings = ['Luke Skywalker', 'Darth Vader', 'Leia Organa']; //tablica z 3 elementami


console.log(tableWithNumbers);

const kontynenty = ['Europa', 'Azja', 'Antarktyda', 'Afryka', 'Australia i Oceania', 'Ameryka Północna', 'Ameryka Południowa'];

kontynenty.sort().reverse();

console.log(kontynenty.push('push'));

console.log(kontynenty);



const style = ['Jazz', 'Blues'];

style.push('Rock-n-Roll');

style[Math.floor((style.length - 1) / 2)] = 'Classics';


style.push('Rap');

style.push('Reggae');

console.log(style);


let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}