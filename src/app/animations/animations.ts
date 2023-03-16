import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  query,
  stagger,
} from '@angular/animations';

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

// item with smooth fade-in using transition with keyframes
export const smoothFade = trigger('smoothFade', [
  state(
    'in',
    style({
      opacity: 1,
      transform: 'translateX(0)',
    })
  ),
  transition('void => *', [
    animate(
      1000,
      keyframes([
        style({
          transform: 'translateX(-100px)',
          opacity: 0,
          offset: 0,
        }),
        style({
          transform: 'translateX(-50px)',
          opacity: 0.5,
          offset: 0.3, //percentage in relation to the time of the animate
        }),
        style({
          transform: 'translateX(-20px)',
          opacity: 1,
          offset: 0.8,
        }),
        style({
          transform: 'translateX(0px)',
          opacity: 1,
          offset: 1,
        }),
      ])
    ),
  ]),
]);

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

// animation to use in a div with ngFor elements ([@listState]="array?.length")
export const listAnimation = trigger('listState', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        }),
        stagger(
          300,
          animate(
            '500ms ease-out',
            keyframes([
              style({
                opacity: 0.6,
                transform: 'translateX(45%)',
                offset: 0.6,
              }),
              style({
                opacity: 1,
                transform: 'translateX(0)',
                offset: 1,
              }),
            ])
          )
        ),
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [
        stagger(
          300,
          animate(
            '1500ms ease-out',
            keyframes([
              style({
                opacity: 0.4,
                transform: 'translateX(50%)',
                offset: 0.5,
              }),
              style({
                opacity: 0,
                transform: 'translateX(100%)',
                offset: 1,
              }),
            ])
          )
        ),
      ],
      { optional: true }
    ),
  ]),
]);

// animation to route components
export const routeAnimation = trigger('routeFadeState', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(1100),
  ]),
]);
