import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

// basic
export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter,:leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)',
      }),
    ]),
    query(':enter', [
      animate(
        '600ms ease',
        style({ opacity: 1, transform: 'scale(1) translateY(0)' })
      ),
    ]),
  ]),
]);

// positioned
export const slider = trigger('routeAnimations', [
  transition('* => isLeft', slideTo('left')),
  transition('* => isRight', slideTo('right')),
  transition('isRight => * ', slideTo('left')),
  transition('isLeft => *', slideTo('right')),
]);
function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(
      ':enter,:leave',
      [style({ position: 'absolute', top: 0, [direction]: 0, width: '100%' })],
      optional
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(
        ':leave',
        [animate('600ms ease', style({ [direction]: '100%' }))],
        optional
      ),
      query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))]),
    ]),
  ];
}

// rotate
export const transformer = trigger('routeAnimations', [
  transition('* => isLeft', translateTo({ x: -100, y: -100, rotate: -720 })),
  transition('* => isRight', translateTo({ x: 100, y: -100, rotate: -720 })),
  transition('isRight => *', translateTo({ x: -100, y: -100, rotate: 360 })),
  transition('isLeft => *', translateTo({ x: 100, y: -100, rotate: -360 })),
]);
function translateTo({ x = 100, y = 0, rotate = 0 }) {
  const optional = { optional: true };

  return [
    query(
      ':enter,:leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      optional
    ),
    query(':enter', [
      style({ transform: `translate(${x}%,${y}%) rotate(${rotate}deg)` }),
    ]),
    group([
      query(':leave', [
        animate(
          '600ms ease-out',
          style({ transform: `translate(${x}%,${y}%) rotate(${rotate}deg)` })
        ),
      ]),
    ]),
  ];
}

// keyframes
export const stepper = trigger('routeAnimations', [
  transition('*<=>*', [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
      }),
    ]),
    group([
      query(':enter', [
        animate(
          '200ms ease',
          keyframes([
            style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
            style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
            style({ transform: 'scale(0) translateX(0%)', offset: 1 }),
          ])
        ),
      ]),
      query(':leave', [
        animate(
          '200ms ease',
          keyframes([
            style({ transform: 'scale(1)', offset: 0 }),
            style({
              transform: 'scale(0.5) translateX(25%) rotate(0)',
              offset: 0.3,
            }),
            style({
              opacity: 0,
              transform: 'scale(6) translateX(-50%) rotate(-180)',
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
  ]),
]);

// indio
export const indio = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' }), {
      optional: true,
    }),
    group([
      query(
        ':enter',
        [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          style({ transform: 'translateX(0%)' }),
          animate(
            '700ms ease-in-out',
            keyframes([
              style({
                transform: 'translateX(0%) scale(1) skew(5deg, 5deg)',
                offset: 0,
              }),
              style({
                transform: 'translateX(-5%) scale(0.9) skew(10deg, 10deg)',
                offset: 0.05,
              }),
              style({
                transform: 'translateX(-10%) scale(0.85)  skew(10deg, 10deg)',
                offset: 0.1,
              }),
              style({
                transform: 'translateX(-15%) scale(0.8) skew(10deg, 10deg)',
                offset: 0.15,
              }),
              style({
                transform: 'translateX(-20%) scale(0.75) skew(10deg, 10deg)',
                offset: 0.2,
              }),
              style({
                transform: 'translateX(-25%) scale(0.7) skew(10deg, 10deg)',
                offset: 0.25,
              }),
              style({
                transform: 'translateX(-30%) scale(0.65) skew(10deg, 10deg)',
                offset: 0.3,
              }),
              // style({ transform: 'translateX(-35%) scale(0.75)', offset: 0.35 }),
              // style({ transform: 'translateX(-40%) scale(0.6)', offset: 0.4 }),
              // style({ transform: 'translateX(-45%) scale(0.65)', offset: 0.45 }),
              // style({ transform: 'translateX(-50%) scale(0.5)', offset: 0.5 }),
              // style({ transform: 'translateX(-55%) scale(0.55)', offset: 0.55 }),
              // style({ transform: 'translateX(-60%) scale(0.4)', offset: 0.6 }),
              // style({ transform: 'translateX(-65%) scale(0.45)', offset: 0.65 }),
              // style({ transform: 'translateX(-70%) scale(0.3)', offset: 0.7 }),
              // style({ transform: 'translateX(-75%) scale(0.35)', offset: 0.75 }),
              // style({ transform: 'translateX(-80%) scale(0.2)', offset: 0.8 }),
              // style({ transform: 'translateX(-85%) scale(0.25)', offset: 0.85 }),
              // style({ transform: 'translateX(-90%) scale(0.1)',  offset: 0.9 }),
              // style({ transform: 'translateX(-95%) scale(0.15)',  offset: 0.95 }),
              style({ transform: 'translateX(-100%) scale(0)', offset: 1 }),
            ])
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
