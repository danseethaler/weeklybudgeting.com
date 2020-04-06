import React from 'react';
import podcastImage from '../../../assets/podcast.png';
import FlexContainer from '../../../components/layout/FlexContainer';
import SliceContainer from '../../../components/layout/SliceContainer';
import {BodyText, SubHeader} from '../../../components/typography';
import styled, {useStyledTheme} from '../../../config/styled';
import Button from '../../../components/Button';

const PodcastImage = styled.img(({theme}) => ({
  width: 462,
  maxWidth: '90%',
}));

const Podcast: React.FC = () => {
  const theme = useStyledTheme();

  return (
    <SliceContainer bgColor="success100">
      <FlexContainer row={!theme.smallDevice} wPadding={[6, 0]}>
        <FlexContainer align="center" flex={1}>
          <SubHeader>Join our podcast,</SubHeader>
          <SubHeader style={{color: theme.colors.success500}}>
            "Why’d you buy that?"
          </SubHeader>
          <BodyText wMargin={[2]} align="center">
            We love to talk about the psychology of spending. Listen in to our
            podcast where we joke about spending gone wrong, share ideas and
            advice on budgeting, and overall try to have a good time.
          </BodyText>
          <FlexContainer
            row={!theme.smallDevice}
            wMargin={[2, 0]}
            align="center"
            justify="center">
            <Button
              square
              wMargin={[1]}
              color="background600"
              onClick={() => {
                window.open('http://weeklybudgeting.libsyn.com/');
              }}>
              The Web
            </Button>
            <Button
              square
              wMargin={[1]}
              color="purple400"
              onClick={() => {
                window.open(
                  'https://podcasts.apple.com/us/podcast/weekly-budgeting/id1471179700',
                );
              }}>
              Apple Podcasts
            </Button>
            <Button
              square
              wMargin={[1]}
              onClick={() => {
                window.open(
                  'https://open.spotify.com/show/445OYh8dZ7gTfc4fysRCIu',
                );
              }}>
              Spotify
            </Button>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer align="center" justify="center" flex={1}>
          <PodcastImage src={podcastImage} />
        </FlexContainer>
      </FlexContainer>
    </SliceContainer>
  );
};

export default Podcast;
