import React from 'react';
import appStore from '../assets/app_store_download.svg';
import multiScreen from '../assets/multi_screen.png';
import styled, {useStyledTheme} from '../config/styled';
import AppReview from './AppReview';
import FlexContainer from './layout/FlexContainer';
import SliceContainer from './layout/SliceContainer';
import {Headline, SubHeader} from './typography';

const MulitScreenImg = styled.img(({theme}) => ({
  maxWidth: '100%',
  width: 550,
}));

const LandingHeader: React.FC = () => {
  const theme = useStyledTheme();

  return (
    <SliceContainer wPadding={[4, 0]}>
      <FlexContainer row={!theme.smallDevice} justify="space-evenly">
        <FlexContainer
          flex={1}
          align="center"
          justify="center"
          wPadding={theme.smallDevice ? [2] : [0, 1, 0, 0]}>
          <SubHeader align="center">Stop guessing.</SubHeader>
          <SubHeader align="center">Spend mindfully.</SubHeader>
          <Headline align="center">Budget weekly.</Headline>
          <AppReview />
          {theme.smallDevice && (
            <a
              style={{padding: theme.baseUnit * 3}}
              target="_blank"
              href="https://apps.apple.com/us/app/weekly-budgeting-redefined/id1460038809"
              // onClick="return trackAppStoreClick();"
            >
              <img style={{transform: 'scale(1.5)'}} src={appStore} />
            </a>
          )}
        </FlexContainer>

        <FlexContainer
          align="center"
          justify="center"
          wPaddingLeft={theme.smallDevice ? 0 : 1}>
          <MulitScreenImg src={multiScreen} />
        </FlexContainer>
      </FlexContainer>
    </SliceContainer>
  );
};

export default LandingHeader;
