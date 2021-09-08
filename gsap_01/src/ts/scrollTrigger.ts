import { gsap } from 'gsap';
import { toArray } from 'gsap/all';
import { ScrollTrigger } from 'gsap/src/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


const aplicateEffect = (el: HTMLElement) => {
  gsap.to(el, {
    scrollTrigger: {
      // toggleActions: 'play reverse play reverse',
      start: 'top center',
      scrub: 0.2,
      trigger: el,
      end: 'bottom center',
      //   markers: true,
      onLeave: () => {
        console.log('leaver');
      },
      onEnter: () => {
        console.log('enter');
      },
      onLeaveBack: () => {
        console.log('onLeaveBack');
      },
      onEnterBack: () => {
        console.log('onEnter back');
      },
    },
    yoyo: true,
    x: 300,
    //   rotation: 360,
    duration: 1,
  });
};
toArray('.box').forEach((el ) => {
  aplicateEffect(el as HTMLElement);
});
