import React from 'react';
import logo from '../assets/logo_name.png';
import styled, {useStyledTheme} from '../config/styled';
import FlexContainer from './FlexContainer';

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 12px;
  margin-left: auto;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Avatar = styled.img({
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 96,
  width: 96,
  height: 96,
  margin: 0,
});

const Description = styled.div(({theme}) => ({
  flex: '1',
  color: theme.colors.orange300,
  marginLeft: 18,
  padding: 12,
}));

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`;

const Excerpt = styled.p`
  margin: 0;
`;

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} alt="" />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
);

const Hero = () => {
  const theme = useStyledTheme();

  return (
    <FlexContainer>
      <p>Emotion is uber {theme.colors.primary100}</p>
      <User
        username="Jane Doe"
        avatar={logo}
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
        excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </FlexContainer>
  );
};

export default Hero;
