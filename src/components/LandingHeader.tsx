import React from 'react';
import multiScreen from '../assets/multi_screen.png';
import styled from '../config/styled';
import AppReview from './AppReview';
import FlexContainer from './layout/FlexContainer';
import SliceContainer from './layout/SliceContainer';
import {Headline, SubHeader} from './typography';

const MulitScreenImg = styled.img(({theme}) => ({
  width: 451,
}));

const LandingHeader: React.FC = () => (
  <SliceContainer wPadding={4}>
    <FlexContainer row justify="space-evenly">
      <FlexContainer align="center" justify="center">
        <SubHeader>Stop guessing.</SubHeader>
        <SubHeader>Spend mindfully.</SubHeader>
        <Headline>Budget weekly.</Headline>
        <AppReview />
      </FlexContainer>

      <FlexContainer>
        <MulitScreenImg src={multiScreen} />
      </FlexContainer>
    </FlexContainer>
  </SliceContainer>
);

export default LandingHeader;
