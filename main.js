import './style.css';

// header position
const header = document.querySelector('.main-header--js');

const headerPosition = () => {
  if (window.pageYOffset > header.offsetTop) {
    header.classList.add('main-header--hide');
  } else {
    header.classList.remove('main-header--hide');
  }
};

// text on hover
const description = document.querySelector('.description--js');
const images = document.querySelectorAll('.gallery__item--js');

const showText = (event) => (description.innerHTML = event.target.getAttribute('data-text'));
const hideText = () => (description.innerHTML = '');

images.forEach((item) => item.addEventListener('mouseenter', showText));
images.forEach((item) => item.addEventListener('mouseleave', hideText));

window.addEventListener('mousemove', (event) => {
  description.style.left = event.clientX + 30 + 'px';
  description.style.top = event.clientY + 'px';
});

// rotate image on scroll
const turnImage = (itemClass, deg) => {
  const scrollTop = window.scrollY;
  document.querySelectorAll(itemClass).forEach((item) => {
    const turnDegrees = parseInt(item.getAttribute('data-turn'));
    if (scrollTop < item.offsetTop - window.innerHeight / 2) {
      item.style.transform = 'rotate(' + turnDegrees + 'deg)';
    } else {
      item.style.transform = 'rotate(' + (turnDegrees + deg) + 'deg)';
    }
  });
};

window.addEventListener('scroll', () => {
  headerPosition();
  turnImage('.gallery__item--turn-right-js', 6);
  turnImage('.gallery__item--turn-left-js', -6);
});
