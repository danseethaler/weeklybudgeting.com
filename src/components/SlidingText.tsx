import {css, keyframes} from '@emotion/core';
import React, {useEffect, useState} from 'react';
import FlexContainer from './FlexContainer';
import {Headline, SubHeader} from './typography';

const slideDownAnimation = keyframes({
  '0%': {
    transform: 'translateX(0)',
    opacity: 1,
  },
  '66%': {
    transform: 'translateX(0)',
    opacity: 1,
  },
  '80%': {
    transform: 'translateX(50px)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateX(0)',
    opacity: 1,
  },
});

// shake 820ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both

const intervals = ['biweekly', 'weekly', 'anytime'];

const msDuration = 2000;
const slideOut = css({
  animation: `${slideDownAnimation} ${msDuration}ms`,
  animationIterationCount: intervals.length,
});

const SlidingText: React.FC = () => {
  const [interval, setInterval] = useState('monthly');

  useEffect(() => {
    function updateInterval() {
      setInterval(intervals.shift());
      if (intervals.length > 0) {
        setTimeout(updateInterval, msDuration);
      }
    }

    setTimeout(updateInterval, msDuration * 0.8);
  }, []);

  return (
    <FlexContainer justify="center">
      <FlexContainer row justify="flex-start">
        <FlexContainer row justify="flex-end" flex={1}>
          <SubHeader>Get paid</SubHeader>
        </FlexContainer>
        <FlexContainer row justify="flex-start" flex={1}>
          <SubHeader css={slideOut}>{interval}</SubHeader>
        </FlexContainer>
      </FlexContainer>
      <Headline>Budget weekly.</Headline>
    </FlexContainer>
  );
};

export default SlidingText;
