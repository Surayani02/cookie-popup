import './style.css';

const timeLine = gsap.timeline({defaults: {duration: 0.75, ease: 'power1.out'}});

timeLine.fromTo('.cookie-container', {scale: 0}, {scale: 1, ease: 'elastic.out(1, 0.4)', duration: 1.5});

timeLine.fromTo('.cookie', {opacity: 0, x: -50, rotation: '-45deg'}, {opacity: 1, x: 0, rotation: '0deg'}, '<50%');

timeLine.fromTo('.text', {x: 30, opacity: 0}, {x: 0, opacity: 1}, '<');

// Cookie jump animation

timeLine.fromTo('.cookie', {y: 0, rotation: '0deg'}, {y: -20, rotation: '-20deg', yoyo: true, repeat: -1});

timeLine.fromTo('#crumbs', {y: 0}, {y: -20, yoyo: true, repeat: -1}, '<');

// Fading the cookie out

const button = document.querySelector('button');

button.addEventListener('click', function () {
  gsap.to('.cookie-container', {opacity: 0, y: 100, duration: 0.75, ease: 'power1.out'});
});

