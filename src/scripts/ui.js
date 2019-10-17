import Logo from '../../public/logo.png';

export function createLogo() {
    const logo = document.createElement('img');
    logo.setAttribute('alt', 'To jest jakieś logo');
    logo.src = `${Logo}`;
    logo.classList.add('logo');
    return logo;
}

export function createMainContainer() {
    const container = document.createElement('section');
    container.classList.add('main');
    return container;
}

// window.addEventListener('DOMContentLoaded', main);

// // let button = window.appendChild(button);

// app.appendChild(button);


export function createButton() {
    const button = document.createElement("input");
    button.type = "type";
    button.value = "sound";
    button.classList.add("btn");
    return button;
}