import gsap, { Elastic } from 'gsap';
import { TimelineLite, shuffle } from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import CssPlugin from 'gsap/CSSPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CssPlugin);
const box$ = document.querySelectorAll('.grid .box');
const line = new TimelineLite();
const y = 100;
const bodyInfo = document.body.getBoundingClientRect();

line.addLabel('start', 0);
line.addLabel('medium', 1);
line.addLabel('final', 1);
// start
// line
//   .to(box$, { x: 300 })
//   .to('.red', { y: -y, rotate: 180 }, 'medium')
//   .to('.blue', { y: +y, rotate: 180 }, 'medium')
//   .to(box$, { x: bodyInfo.width - 150 }, 'final');

// line.to(box$, { x: bodyInfo.width - 120, stagger: 0.1 });

const myCall = (line: TimelineLite) => {
  console.log('hola wenas');
  console.log(line);
  // line.seek('-=2');
  // line.add()
};

const coverRotate = document.getElementById('rotate');
const animationRotate = gsap.timeline({ repeat: -1, delay: 0.1 });
animationRotate
  .fromTo(coverRotate, { left: '5%' }, { left: '90%' })
  .to(coverRotate, { top: '70%', backgroundColor: 'red' })
  .call(myCall, [animationRotate])
  .to(coverRotate, { left: '5%', backgroundColor: 'yellow' })
  .to(coverRotate, { top: 0, backgroundColor: 'green' });
// console.log(coverRotate);
// animationRotate.play();

const red = line.to(box$, {
  duration: 0.5,
  scale: 1.5,
  stagger: {
    yoyo: true,
    ease: Elastic.easeIn,
    repeatDelay: 0.1,
    repeat: -1,
    each: 0.6,
    grid: 'auto',
    from: 'center',
  },
});

function restart() {
  console.log('restart');
  line.restart();
}
function pause() {
  line.pause();
}
function play() {
  line.play();
}
function reverse() {
  line.reverse();
}
document.getElementById('restart').addEventListener('click', restart);
document.getElementById('pause').addEventListener('click', pause);
document.getElementById('play').addEventListener('click', play);
document.getElementById('reverse').addEventListener('click', reverse);
// line.play();
