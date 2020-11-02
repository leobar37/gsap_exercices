import * as $ from 'jquery';
import { TimelineMax, gsap } from 'gsap/all';
const lineMenu = gsap.timeline({ repeat: -1 });
// lineMenu.;
// lineMenu.s
const circle = document.querySelector('.circle');
const line$ = gsap
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
      // repeat: -1,
      // repeat: -1,
      from: 'edges',
    },
  })
  .to(gsap.utils.shuffle(Object.assign([], menu$)), {
    x: gsap.utils.wrap([-150, 150], menu$.length),
    opacity: 0.6,
    stagger: {
      each: 0.2,
      yoyo: true,
      // repeat: -1,
      // repeat: -1,
      from: 'edges',
    },
  })
  .call(() => {
    console.log(lineMenu.iteration());
  });

//   .add(line$);

// line$.to()
// function addTicker(time, deltatime, frame) {
//   console.log('my tocker', time, deltatime, frame);
// }
// gsap.ticker.add(addTicker);
// gsap.ticker.remove(addTicker);
