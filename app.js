const burger = document.querySelector('.burger');
const navbar = document.querySelector('.nav-bar');
const logo = document.querySelector('#logo');

const navToggleVTwo = () => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');

        navbar.classList.toggle('nav-active');
        document.body.classList.toggle('hide');
        logo.classList.toggle('logo-active');
    })
}

navToggleVTwo();
