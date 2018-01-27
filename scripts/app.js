//Landing Page

const header = document.querySelector('.header-section');
const left = document.querySelector('.portfolio-section');
const right = document.querySelector('.service-section');
const container = document.querySelector('.container');
const footer = document.querySelector('.footer-section');

left.addEventListener('mouseenter', () => {
  container.classList.add('hover-left');
});

left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
});

right.addEventListener('mouseenter', () => {
  container.classList.add('hover-right');
});

right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
});

header.addEventListener('mouseenter', () => {
  container.classList.add('hover-up');
});

header.addEventListener('mouseleave', () => {
  container.classList.remove('hover-return');
});

footer.addEventListener('mouseenter', () => {
  footer.classList.add('hover-down');
});

footer.addEventListener('mouseleave', () => {
  footer.classList.remove('hover-return');
});


// Mobile View Slide out menu

function openSideMenu() {
  document.getElementById('nav-bar').style.width = '50%';
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSideMenu() {
  document.getElementById('nav-bar').style.width = '0';
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
}
