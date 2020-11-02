### y and x

```ts
line.to(box$, {
  delay: 0.5,
  duration: 1,
  y: function (i, da, dat) {
    console.log('is position of the element');
    console.log(i);
    console.log('is current element);
    console.log(da);
    console.log('is every elements');
    console.log(dat);
    return i;
  },
});
line.play();
```

### yoyo

>     If true, every other repeat iteration will run in the opposite direction so that the tween appears to go back and forth. This has no affect on the reversed property though. So if repeat is 2 and yoyo is false, it will look like: start - 1 - 2 - 3 - 1 - 2 - 3 - 1 - 2 - 3 - end. But if yoyo is true, it will look like: start - 1 - 2 - 3 - 3 - 2 - 1 - 1 - 2 - 3 - end. Default: false.

## keyframes

```ts
line.from(box$, {
  keyframes: [
    { x: 50, duration: 1 },
    { rotate: 360, duration: 1 },
  ],
});
```

## position parameter

```ts
line.addLabel('start', 0);
line.addLabel('medium', 1);
line.addLabel('final', 1);
// start
line
  .to(box$, { x: 300 })
  .to('.red', { y: -y, rotate: 180 }, 'medium')
  .to('.blue', { y: +y, rotate: 180 }, 'medium')
  .to(box$, { x: bodyInfo.width - 150 }, 'final');
```

## add method

add tween, timeline, callback , or lable or on an array og them to the
timeline

patameters

**position:**
controls the placement of the object in the timeline

**align:**
only relevant when the first parameter, value is an array
determine how the tweens/timelines/callbacks/labels in the array
that is being added will be aligned in realition each other before
getting inserted

**stagger:**

only relevant when the first parameter, value is an array
staggers the inserted objects from the
array that is being added by set amoun of time(in seconds)

```js
//add a tween to the end of the timeline
tl.add(TweenLite.to(element, 2, { left: 100 }));

//add a callback at 1.5 seconds
tl.add(func, 1.5);

//add a label 2 seconds after the end of the timeline (with a gap of 2 seconds)
tl.add('myLabel', '+=2');

//add another timeline at "myLabel"
tl.add(otherTimeline, 'myLabel');

//add an array of tweens 2 seconds after "myLabel"
tl.add([tween1, tween2, tween3], 'myLabel+=2');

//add an array of tweens so that they are sequenced one-after-the-other with 0.5 seconds inbetween them, starting 2 seconds after the end of the timeline
tl.add([tween1, tween2, tween3], '+=2', 'sequence', 0.5);
```

### staggerTo()

if avalible in stagger property from gsaop 3.00

### scrollTrigger

ScrollTrigger se puede utilizar como una abreviatura del disparador (descrito a continuación) o como un objeto de configuración con cualquiera de las siguientes propiedades

**animation:**
una instancia de GSAP tween o Timelineque que debe ser
controlada por scrollTrigger
**end**
keywords:
top , bottom, center
**scroller:**
de forma predeterminada, el desplezador es la propia ventana
gráfica, pero si desea agregar un scrollTrigger a un div desplazable
por ejemplo solo definalo como desplazador

**scrub:**
vincula el progreso de la animación directamente
a la barra de desplazamiento para que actúe como depurador
puede aplicar suavizado para que el cabezal de reproducción
tarde un poco en ponerse al dí as con las posición de la barra
de desplazamiento

> links the progress of the animation directly to the scrollbar os it
> acts like scrubber.
> you can apply soothing so that it takess a little
> time for the playhead to catch up ith th scrollbar´s
> position

boolean | true : links the animation´s progress directly to the
scrollTrigge´s progress
number : the amunt of time (in seconds) that playhead should take to
"catch up", so scrub :0.5 would cause the animation´s playhead to take
0.5 seconds to catch up with the scrollbar´s position

**snap:**
allows you to snap to certain progress values(between 0 and 1)
after the user stops

it can be any of the following:

number : if you have certain number pf section, simply 1 / (sections -1)

Object - Like snap: {snapTo: "labels", duration: 0.3, delay: 0.1, ease: "power1.inOut"}, fully customizable with any of the following properties (only "snapTo" is required):
snapTo [Number | Array | Function | "labels"] - determines the snapping logic (described above)
delay [Number] - the delay (in seconds) between the last scroll event and the start of the snapping animation. Default is half the scrub amount (or 0.1 if scrub isn't a number)
duration [Number | Object] - the duration of the snapping animation (in seconds). duration: 0.3 would always take 0.3 seconds, but you can also define a range as an object like duration: {min: 0.2, max: 3} to clamp it within the provided range, based on the velocity. That way, if the user stops scrolling close to a snapping point, it'd take less time to snap than if the natural stopping point is far from a snapping point.

**start:**

Determines the starting position of the scrollTrigger

it cant be of the following :

string : 'top center bottom'

**toggle actions:**

Determines how the linked animation is controlled at the 4 distinct
toggle places -

- onEnter,
- onLeave,
- onEnterBack
- onLeaveBack
  in that order.

you can use any of the followeing keywords for each action
"play" , "pause" , "resume" , "restart" , "complete" ,"reset"
