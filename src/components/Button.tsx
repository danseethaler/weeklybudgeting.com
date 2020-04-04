import React from 'react';
import styled from '../config/styled';
import {
  sharedTypographyStyles,
  TypographyComponentProps,
} from '../config/typography';

const StyledButton = styled.button<TypographyComponentProps>(({theme}) => [
  sharedTypographyStyles,
  {
    fontSize: theme.fontUnit * 4.5,
    fontWeight: theme.fontWeight.medium,
    padding: `${theme.baseUnit / 2}px ${theme.baseUnit * 4}px`,
    backgroundColor: theme.colors.success500,
    borderRadius: theme.baseUnit,
    boxShadow: '0px 2px 5px 0px #bce1d3',
    color: theme.colors.white,
    border: 'none',
  },
]);

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({text}) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
