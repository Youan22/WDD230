/*const btn = document.querySelector('#hamburgerBtn');
const nav = document.querySelector('nav');
const darkmodebtn = document.querySelector('#darkmodebtn');
const body = document.querySelector('body');

darkmodebtn.addEventListener('click', toggleDarkMode);
function toggleDarkMode() {
    body.classList.toggle('darkmode');
}




btn.addEventListener('click', toggleMenu);
function toggleMenu() {
    nav.classList.toggle('open');
    btn.classList.toggle('open');

}


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});*/

document.addEventListener('DOMContentLoaded', function() {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    if (hamButton && navigation) {
        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open');
            hamButton.classList.toggle('open');
        });
    } else {
        if (!hamButton) console.error('Element with id "menu" not found');
        if (!navigation) console.error('Element with class "navigation" not found');
    }
});


