import React from 'react';
import FlexContainer from './layout/FlexContainer';
import {BodyText, StarsText} from './typography';

const AppReview: React.FC = () => {
  return (
    <FlexContainer wPadding={[2, 0]} align="center">
      <BodyText align="center" wPaddingTop={2}>
        "This app is ideal for accomplishing what we're all trying to do — stick
        to a budget."
      </BodyText>

      <StarsText>★★★★★</StarsText>
    </FlexContainer>
  );
};

export default AppReview;
