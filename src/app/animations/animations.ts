import { trigger, state, style, animate, transition } from '@angular/animations';

//fade-in opacity animation.
export const fadeIn = [
  trigger('fadeIn', [
    // the "in" state determines when the element is in the DOM
    // (dont care the name if there is only one state in the trigger).
    state(
      'in',
      style({
        opacity: 1,
      })
    ),

    // fade in when created. this could also be written as transition('void => *')
    transition(':enter', [style({ opacity: 0 }), animate(800)]),

    // fade out when destroyed. this could also be written as transition('void => *')
    transition(':leave', [animate(450, style({ opacity: 0 }))]),
  ]),
];

// fade-in from right animation.
export const itemFadeIn = [
  trigger('itemFadeIn', [
    state(
      'in',
      style({
        opacity: 1,
        transform: 'translateX(0)',
      })
    ),
    transition('void => *', [
      style({
        opacity: 0,
        transform: 'translateX(100px)',
      }),
      animate(400),
    ]),
    transition('* => void', [
      animate(
        400,
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        })
      ),
    ]),
  ]),
];

// rotate 180º animation.
export const rotateIn = [
  trigger('rotateIn', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [style({ transform: 'rotate(-180deg)' }), animate('700ms ease-out')]),
  ]),
];

// appear from bottom animation
export const flyFromBottom = [
  trigger('flyFromBottom', [
    state('in', style({ transform: 'translateY(0)' })),
    transition('void => *', [style({ transform: 'translateY(50%)' }), animate('800ms ease-in')]),
  ]),
];

// animation in which one you need an event to change the string state
export const smoothCollapse = [
  trigger('smoothCollapse', [
    state(
      'initial',
      style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
      })
    ),
    state(
      'final',
      style({
        overflow: 'hidden',
        opacity: '1',
      })
    ),
    transition('initial=>final', animate('750ms')),
    transition('final=>initial', animate('750ms')),
  ]),
];
