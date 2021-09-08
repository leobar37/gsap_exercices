import { data } from "./data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { domUtils } from "./utils";
import Scrollbar from "smooth-scrollbar";
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", () => {
  const scrollBar = domUtils.get(".main");
  const textContainer = domUtils.get(".text-container");
  const renderImages = () => {
    data.forEach((d) => {
      const img = domUtils.create("img") as HTMLImageElement;
      const figure = domUtils.create("figure");
      img.src = d.imageSrc;
      figure.appendChild(img);
      domUtils.get("section.images").appendChild(figure);
    });
  };
  const initScrollbar = () => {
    const verticalScrollbar = Scrollbar.init(scrollBar, {
      // Momentum reduction damping factor , a float value between 0 , 1
      damping: 0.1,
      delegateTo: document,
    });
    verticalScrollbar.setPosition(0, 0);
    verticalScrollbar.track.xAxis.element.remove();
    verticalScrollbar.track.yAxis.element.remove();
    /**
     * scrollerProxy :
     * Allows you to hijack the scrollTop and/or scrollLeft
     * getters/setters for a particular scroller element so that
     * you can implement things like smooth scroolling
     * or other custom effects
     */
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop: (val) => {
        if (val) {
          // this is a setter
          verticalScrollbar.scrollTop = val;
        }
        console.log(verticalScrollbar.scrollTop);
        // this is used as getter
        return verticalScrollbar.scrollTop;
      },
    });
  };
  renderImages();
  initScrollbar();

  const images = domUtils.getAll("section.images > figure");
  console.log(images);
  gsap.to(images[0], { top: "3%", right: 0, duration: 0, zIndex: 0 });
  gsap.to(images[1], { top: "15%", right: 0, duration: 0, zIndex: 1 });
  gsap.to(images[2], { top: "35%", right: 0, duration: 0, zIndex: 2 });
  gsap.to(images[3], { top: "15%", right: "12%", duration: 0, zIndex: 2 });
  gsap.to(images[4], { top: "8%", right: "20%", duration: 0, zIndex: 1 });
  gsap.to(images[5], { top: "30%", right: "20%", duration: 0, zIndex: 1 });

  const defaultScrollPosition = {
    scroller: scrollBar,
    trigger: ".main",
    start: "30px top",
    scrub: 1,
    end: "+=100%",
  } as ScrollTrigger.Vars;

  const endPosition = {
    top: "78%",
    rotate: 0,
    left: "50%",
    transform: "translate(-50% , -50%)",
  } as gsap.TweenVars;

  gsap.to(textContainer, {
    x: -1000,
    scrollTrigger: {
      ...defaultScrollPosition,
    },
  });

  gsap
    .timeline({ scrollTrigger: { ...defaultScrollPosition } })
    .to("body", { background: "#ffff" })
    .to("body", { background: "#5bd7ff" });
  // get images
  gsap
    .timeline({
      scrollTrigger: { ...defaultScrollPosition },
    })
    .to(images[0], {
      top: "65%",
      rotate: 20,
      left: "60%",
      transform: "translate(-50% , -50%)",
    })
    .to(images[0], { ...endPosition });

  gsap
    .timeline({
      scrollTrigger: { ...defaultScrollPosition },
    })
    .to(images[1], {
      top: "65%",
      rotate: -20,
      left: "60%",
      transform: "translate(-50% , -50%)",
    })
    .to(images[1], { ...endPosition });
  gsap
    .timeline({
      scrollTrigger: { ...defaultScrollPosition },
    })
    .to(images[2], {
      top: "65%",
      rotate: 20,
      left: "60%",
      transform: "translate(-50% , -50%)",
    })
    .to(images[2], { ...endPosition });
  gsap
    .timeline({
      scrollTrigger: { ...defaultScrollPosition },
    })
    .to(images[3], {
      top: "65%",
      rotate: -20,
      left: "60%",
      transform: "translate(-50% , -50%)",
    })
    .to(images[3], { ...endPosition });
  gsap
    .timeline({
      scrollTrigger: { ...defaultScrollPosition },
    })
    .to(images[4], {
      top: "65%",
      rotate: 20,
      left: "60%",
      transform: "translate(-50% , -50%)",
    })
    .to(images[4], { ...endPosition });
  gsap
    .timeline({
      scrollTrigger: { ...defaultScrollPosition },
    })
    .to(images[5], {
      top: "65%",
      rotate: 20,
      left: "60%",
      transform: "translate(-50% , -50%)",
    })
    .to(images[5], { ...endPosition });

  //   const images = domUtils.getAll("");
});
