
const buttonDropdown = document.querySelector('#buttonDropdown');
const buttonDropdown1 = document.querySelector('#buttonDropdown1');
const overlayNav = document.querySelector('.overlayNav');
const dropdown = document.querySelector('#dropdown');
const dropdown1 = document.querySelector('#dropdown1');

const navbarMenu = document.querySelector('.navbar__menu');
const navbarLinks = document.querySelectorAll('.dropdown__link');
const navbar = document.querySelector('.navbar');

const logoImage = document.querySelector('.logo__image');
const buttonToggle = document.querySelector('#buttonToggle');
const buttonClose = document.querySelector('#buttonClose');

/**/
buttonDropdown.addEventListener('click', (e) => {
   e.preventDefault();
   dropdown.classList.toggle('active');
   overlayNav.classList.add('active');
});

buttonDropdown1.addEventListener('click', (e) => {
   e.preventDefault();
   dropdown1.classList.toggle('active');
   overlayNav.classList.add('active');
});


overlayNav.addEventListener('click', () => {
   dropdown.classList.remove('active');
   dropdown1.classList.remove('active');
   overlayNav.classList.remove('active');
});

navbarLinks.forEach(navbarLink => {
   navbarLink.addEventListener('click', () => {
      overlayNav.classList.remove('active');
   });
});

window.addEventListener('scroll', (e) => {
   if (window.scrollY > 100) {
      navbar.classList.add('active');
      logoImage.classList.add('active');
   } else {
      logoImage.classList.remove('active');
      navbar.classList.remove('active');
   }
});

buttonToggle.addEventListener('click', () => {
   navbarMenu.classList.toggle('active');
});

buttonClose.addEventListener('click', () => {
   navbarMenu.classList.remove('active');
})

/* Button Up */

const buttonUp = document.querySelector('#button-up');
buttonUp.addEventListener('click', () => {
   window.scrollTo(0, 0);
});

window.addEventListener('scroll', (e) => {
   if (window.scrollY > 500) {
      buttonUp.classList.add('active');
   } else {
      buttonUp.classList.remove('active');
   }
})