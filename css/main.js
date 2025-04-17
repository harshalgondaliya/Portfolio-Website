const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu ul');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Optional: Automatically close menu when a section is clicked
const navLinks = document.querySelectorAll('.nav-menu ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});