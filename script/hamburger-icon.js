const hamburgerIcon = document.querySelector('.hamburger-icon');


hamburgerIcon.addEventListener('click', function() {
 
  const menuContainer = document.querySelector('.menu-container');

 
  menuContainer.classList.toggle('menu-open');
});