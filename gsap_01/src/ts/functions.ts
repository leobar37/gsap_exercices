export const addSectionCallback = (
  timline: TimelineMax,
  params: {
    start: number;
    end: number;
    onEnter: () => void;
    onLeave: () => void;
    onEnterBack: () => void;
    onLeaveBack: () => void;
  }
) => {


  const trackDirection = (animation: TimelineLite) => {
    let onUpdate = animation.eventCallback('onUpdate'); // if exist callback onUpadate
    let prevTime = animation.time();
    let direction = animation.reversed() ? -1 : 1;
    animation.eventCallback('onUpdate', () => {
      const time = animation.time();
      if (time !== direction) {
        direction = time < prevTime ? -1 : 1;
        prevTime = time;
      }
      onUpdate && onUpdate.call(animation);
    });
  };
  trackDirection(timline);
  //   timline.d
  // timline.d
};
