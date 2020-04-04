import React from 'react';
import multiScreen from '../assets/multi_screen.png';
import styled from '../config/styled';
import AppReview from './AppReview';
import FlexContainer from './layout/FlexContainer';
import SliceContainer from './layout/SliceContainer';
import {Headline, SubHeader} from './typography';

const MulitScreenImg = styled.img(({theme}) => ({
  width: 550,
}));

const LandingHeader: React.FC = () => (
  <SliceContainer wPadding={[4, 0]}>
    <FlexContainer row justify="space-evenly">
      <FlexContainer align="center" justify="center" wPaddingRight={1}>
        <SubHeader align="center">Stop guessing.</SubHeader>
        <SubHeader align="center">Spend mindfully.</SubHeader>
        <Headline align="center">Budget weekly.</Headline>
        <AppReview />
      </FlexContainer>

      <FlexContainer align="center" justify="center" wPaddingLeft={1}>
        <MulitScreenImg src={multiScreen} />
      </FlexContainer>
    </FlexContainer>
  </SliceContainer>
);

export default LandingHeader;
