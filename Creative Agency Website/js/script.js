const toggle = document.querySelector(".toggleButton i");
const navigationLinks = document.querySelector('.headerLinks')
toggle.addEventListener('click', () => {
    toggle.classList.toggle('fa-times')
    navigationLinks.classList.toggle('active');
})