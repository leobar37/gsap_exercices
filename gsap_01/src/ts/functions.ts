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
  //   console.log(
  //     params.start,
  //     params.end,
  //     params.onEnter(),
  //     params.onLeave(),
  //     params.onEnterBack(),
  //     params.onLeaveBack()
  //   );
  console.log(params.start, params.end);

  const trackDirection = (animation: TimelineLite) => {
    let onUpdate = animation.eventCallback('onUpdate'); // if exist callback onUpadate
    let prevTime = animation.time();
    let direction = animation.reversed() ? -1 : 1;
    animation.eventCallback('onUpdate', () => {
      //   console.log('my on update');

      const time = animation.time();
      if (time !== direction) {
        direction = time < prevTime ? -1 : 1;
        prevTime = time;
      }
      onUpdate && onUpdate.call(animation);
    });
  };
  trackDirection(timline);
  const empty = (v) => v; // in case  the callback is not defined
  //   timline.d
  // timline.d
};
