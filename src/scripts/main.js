import '../styles/main.scss';
// import './ui';

import { createLogo, createMainContainer, createButton } from './ui';
import { switchButton } from './switch';

function main() {
    const app = document.getElementById('root');

    const logo = createLogo();
    app.appendChild(logo);

    const container = createMainContainer();
    app.appendChild(container);

    const button = createButton();
    container.appendChild(button);

    switchButton();
}

window.addEventListener('DOMContentLoaded', main);

// // let button = window.appendChild(button);

// app.appendChild(button);


//to jest cala magia listenerow, jak jest skonstruowana ta struktura...