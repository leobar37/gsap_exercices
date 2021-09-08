import {  gsap } from 'gsap/all';

const lineMenu = gsap.timeline({ repeat: -1 });

const circle = document.querySelector('.circle');
gsap
  .timeline()
  .to(circle, { opacity: 0 })
  .to(circle, { opacity: 1 })
  .call(() => {
    console.log('repeat');
  });

const menu$ = document.querySelectorAll('.menutwo li');
lineMenu
  .from(gsap.utils.shuffle(Object.assign([], menu$)), {
    x: gsap.utils.wrap([-150, 150], menu$.length),
    opacity: 0.6,
    stagger: {
      each: 0.2,
      yoyo: true,
      from: 'edges',
    },
  })
  .to(gsap.utils.shuffle(Object.assign([], menu$)), {
    x: gsap.utils.wrap([-150, 150], menu$.length),
    opacity: 0.6,
    stagger: {
      each: 0.2,
      yoyo: true,
      from: 'edges',
    },
  })
  .call(() => {
    console.log(lineMenu.iteration());
  });

