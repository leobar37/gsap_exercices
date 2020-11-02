import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
gsap.defaults({ ease: 'none', duration: 2 });

gsap.utils.toArray('section').forEach((el, i) => {
  //  el =  el as HTMLHtmlElement;
  const bg = (el as HTMLHtmlElement).querySelector('.bg') as HTMLDivElement;
  const h1 = (el as HTMLHtmlElement).querySelector('h1') as HTMLDivElement;

  bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;
  // do the parallax effect on each section
  bg.style.backgroundPosition = `50% ${window.innerHeight / 2}px`;
  // console.log();
  // gsap.from(bg, {
  //   backgroundPosition: `50% ${window.innerHeight / 2}px`,
  //   ease: 'none',
  //   scrollTrigger: {
  //     trigger: el as HTMLElement,
  //     scrub: true,
  //   },
  // });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: el as HTMLElement,
        scrub: true,
        // start : "top 70%"
      },
    })
    .add('pos', 1)
    .to(bg, {
      ease: 'none',
      backgroundPosition: `50% ${-window.innerHeight / 2}px`,
    })
    .to(
      bg,
      {
        scale: 0.8,
        onStart: (el) => {
          console.log('here' + i);
        },
      },
      0
    );
  // .fromTo(bg, { scale: 1 }, { scale: 1.2 }, 0);

  gsap
    .timeline({
      scrollTrigger: {
        trigger: el as HTMLElement,
        // markers: true,
        // scrub: true,
        // pin: true,
        toggleActions: 'restart none restart none',
        start: 'top 50%',
        end: 'bottom 20%',
        onEnter: () => {
          console.log('on enter');
        },
        onLeave: () => {
          console.log('on leave');
        },
        onEnterBack: () => {
          console.log('enter  back');
        },
      },
      defaults: {
        duration: 0.4,
      },
    })
    .from(h1, { x: -(window.innerWidth / 3) })
    .to(h1, { scale: 1.5 });
});

// tl.from('.red', { xPercent: 100 })
//   .from('.orange', { yPercent: -100 })
//   .from('.purple', { xPercent: -100 });

// ScrollTrigger.create({
//   animation: tl,
//   trigger: '.red',
//   start: 'top top',
//   scrub: true,
//   end: '+=4000',
//   markers: true,
//   pin: true,
//   // anticipatePin: 2,
//   onEnter: () => {
//     console.log('on enter');
//   },
//   onLeaveBack: () => {
//     console.log('on leave');
//   },
//   onEnterBack: () => {
//     console.log('on enter back');
//   },
// });

// console.log('hey here');

// let sections = gsap.utils.toArray('.panel');

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.container',
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     // base vertical scrolling on how wide the container is so it feels more natural.
//     end: () =>
//       '+=' +
//       (document.querySelector('.container') as HTMLHtmlElement).offsetWidth,
//   },
// });
