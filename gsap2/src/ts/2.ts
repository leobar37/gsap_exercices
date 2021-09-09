import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { domUtils, splitChars } from "./utils";

import Scrollbar from "smooth-scrollbar";

gsap.registerPlugin(ScrollTrigger);

const main = async () => {
  const scrollBar = domUtils.get(".main2");
  const dots = domUtils.getAll(".dots .section");
  const text = domUtils.get(".text h1");
  const letters = splitChars(text);

  const initScrollbar = () => {
    const verticalScrolllbar = Scrollbar.init(scrollBar, {
      damping: 0.1,
    });
    verticalScrolllbar.setPosition(0, 0);
    verticalScrolllbar.track.xAxis.element.remove();
    verticalScrolllbar.track.yAxis.element.remove();
    ScrollTrigger.scrollerProxy(scrollBar, {
      scrollTop: (val?) => {
        if (val) {
          verticalScrolllbar.scrollTop = val;
        }
        return verticalScrolllbar.scrollTop;
      },
    });
  };
  initScrollbar();

  const configScrollTrigger = {
    scroller: scrollBar,
    trigger: ".main",
    start: "45px top",
    scrub: 1,
    end: "+=100%",
  } as ScrollTrigger.Vars;
  //   gsap.set(dots, { x: -1000 });

  //   gsap.to(dots[0], { x: 0, scrollTrigger: { ...configScrollTrigger } });
  gsap
    .timeline({
      scrollTrigger: {
        ...configScrollTrigger,
      },
    })
    .to(letters, { y: -800 })
    .to(letters, {
      y: 0,
      stagger: {
        amount: 0.1,
        from: "edges",
      },
      duration: 0.5,
    });
};

window.addEventListener("load", () => {
  main();
});
