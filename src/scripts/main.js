
// import '../styles/main.scss';

// import { createLogo, createMainContainer, createButton } from './ui';

// function main() {
//     const app = document.getElementById('root');

//     const logo = createLogo();
//     app.appendChild(logo);

//     const container = createMainContainer();
//     app.appendChild(container);

//     const button = createButton();
//     container.appendChild(button);

//     switchSound();

// }


// window.addEventListener('DOMContentLoaded', main);




const h4 = document.getElementById('root');

var section1 = document.createElement("section");
section1.className = "card";

const h2 = document.createElement("h2");
h2.className = "card__header";

h4.appendChild(section1);
section1.appendChild(h2);
h2.innerText = "{title}";

const p = document.createElement("p");
p.className = "card__header-description";
p.innerText = "{opening_crawl}";

h4.appendChild(p);
{/* <section class='card'>
    <h2 class='card__header'>{title}</h2>
    <p class="card__header-description">{opening_crawl}</p>
</section> */}