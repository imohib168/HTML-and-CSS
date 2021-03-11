const ham = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

ham.addEventListener('click', () => {
    ham.classList.toggle('fa-times')
    navLinks.classList.toggle('active');
})


// navLinks.addEventListener('click', () => {
// })