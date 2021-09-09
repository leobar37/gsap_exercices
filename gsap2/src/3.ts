import "./sass/3/main.scss";

import { domUtils } from "./ts/utils/domUtils";

import { memoize, debounce } from "lodash";
const container$ = domUtils.get(".container")!;

const clothing$ = document.querySelector(".intro-center span:nth-child(1)");
const imported$ = document.querySelector(".intro-center span.top");
const text$ = document.querySelector(".intro-center div.text");
const figureImage$ = document.querySelector(".intro-center figure");
// section image
const sectionOneImage$ = document.querySelector(".img-reveal");

import { ScrollTrigger } from "gsap/all";
import { gsap, Power3 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const setBodyHeight = () => {
  initScrollAnimations();

  const setHeight = memoize(
    () => {
      document.body.style.height = `
   ${container$.getBoundingClientRect().height}px  
`;
    },
    () => ({
      height: window.innerHeight,
      width: window.innerWidth,
    })
  );
  setHeight();
  window.addEventListener("resize", () => {
    console.log("resize init");
    initScrollAnimations();
    setHeight();
  });
};

const data = {
  ease: 0.1,
  curr: 0,
  prev: 0,
  rounded: 0,
};

const smothScrollBar = debounce(() => {
  data.curr = window.scrollY;
  data.prev += (data.curr - data.prev) * data.ease;
  data.rounded = Math.round(data.prev * 100) / 100;
  container$.style.transform = `translateY(-${data.rounded}px)`;
  requestAnimationFrame(() => smothScrollBar());
}, 12);

const initScrollAnimations = () => {
  const animationObj = {
    duration: 0.8,
    y: -80,
    opacity: 0,
  };

  gsap.to([clothing$, text$], {
    scrollTrigger: {
      trigger: clothing$,
      start: "center 20%",
      scrub: true,
    },
    ...animationObj,
  });

  gsap.to(imported$, {
    scrollTrigger: {
      trigger: imported$,
      start: "center 15%",
      scrub: true,
    },
    ...animationObj,
  });
  gsap
    .timeline({
      scrollTrigger: {
        trigger: figureImage$,
        start: "center 20%",
        scrub: true,
      },
      defaults: {
        ease: Power3.easeInOut as any,
      },
    })
    .to(figureImage$, {
      duration: 0.9,
      y: 95,
      scale: 1.6,
    })
    .to(figureImage$, {
      duration: 0.9,
      y: -40,
      opacity: 0,
    });

  gsap.to(sectionOneImage$, {
    scrollTrigger: {
      trigger: sectionOneImage$,
      start: "center 100%",
      scrub: true,
      markers: true,
    },
    y: -300,
    filter: "contrast(1)",
    duration: 0.8,
  });
};

const main = () => {
  requestAnimationFrame(() => smothScrollBar());
  setBodyHeight();
};

window.addEventListener("load", () => main());

// https://github.dev/bekamais/react-scroll-animations
