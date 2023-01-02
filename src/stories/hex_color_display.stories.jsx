import React from 'react';
import { storiesOf } from '@storybook/react';
import HexColorDisplay from '../index';

const stories = storiesOf('test', module);

const dataExample = [
  {
    start: 0,
    end: 13,
    name: 'some fency header',
    color: ''
  },
  {
    start: 13,
    end: 31,
    name: 'section 2',
    color: '',
  },
  {
    start: 31,
    end: 64,
    name: 'section 2',
    color: '',
  },
];

stories.add('App', () => {
  const raw = 
  [ 
    0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11, 12, 13, 14, 15, 
    16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 
    32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63
  ];
  const view = <HexColorDisplay offsets={dataExample} rawData={raw} />;
  return (view);
});
