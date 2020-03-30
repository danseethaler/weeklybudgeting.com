import styled from '../config/styled';

export const Headline = styled.h1(({theme}) => ({
  margin: 0,
  fontFamily: '"Montserrat", serif',
  fontSize: '49px',
  color: theme.colors.success500,
  letterSpacing: '0px',
  lineHeight: '1.2',
  fontWeight: theme.fontWeight.bold,
  fontStyle: 'normal',
  textAlign: 'center',
}));

export const SubHeader = styled.h3(({theme}) => ({
  marginBottom: 8,
  paddingRight: 8,
  fontFamily: '"Montserrat", serif',
  fontSize: 37,
  fontWeight: theme.fontWeight.bold,
  fontStyle: 'normal',
  color: theme.colors.subheader,
}));
