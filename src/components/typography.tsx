import styled from '../config/styled';
import {
  sharedTypographyStyles,
  TypographyComponentProps,
} from '../config/typography';

export const Headline = styled.h1<TypographyComponentProps>(({theme}) => [
  sharedTypographyStyles,
  {
    margin: 0,
    fontFamily: theme.fontFamily.header,
    fontSize: theme.fontUnit * 11.5,
    color: theme.colors.success500,
    lineHeight: 1.4,
    fontWeight: theme.fontWeight.bold,
  },
]);

export const SubHeader = styled.h3<TypographyComponentProps>(({theme}) => [
  sharedTypographyStyles,
  {
    fontFamily: theme.fontFamily.header,
    fontSize: theme.fontUnit * 9.5,
    fontWeight: theme.fontWeight.bold,
    fontStyle: 'normal',
    lineHeight: 1.6,
    color: theme.colors.subheader,
  },
]);

export const BodyText = styled.p<TypographyComponentProps>(({theme}) => [
  sharedTypographyStyles,
  {
    fontWeight: theme.fontWeight.medium,
    lineHeight: 1.6,
    color: theme.colors.body,
    fontSize: theme.fontUnit * 4.5,
  },
]);

export const StarsText = styled.span(({theme}) => ({
  color: theme.colors.starYellow,
  fontSize: theme.fontUnit * 7,
  padding: theme.baseUnit / 2,
}));
