import addColorProperties from '../config/addColorProperties';
import styled from '../config/styled';
import {ColorKeys} from '../config/themes';
import {
  sharedTypographyStyles,
  TypographyComponentProps,
} from '../config/typography';
import {sharedSpacingStyles, SpacingComponentProps} from './layout/spacing';

interface Props {
  color?: ColorKeys;
  square?: boolean;
}

const Button = styled.button<
  Props & TypographyComponentProps & SpacingComponentProps
>(({theme, color = 'success500', square = false}) => [
  sharedSpacingStyles,
  sharedTypographyStyles,
  {
    fontSize: theme.fontUnit * 4.5,
    fontWeight: theme.fontWeight.medium,
    padding: `${theme.baseUnit / 2}px ${theme.baseUnit * 4}px`,
    backgroundColor: theme.colors[color],
    borderRadius: theme.baseUnit / (square ? 2 : 1),
    boxShadow: `0px 2px 5px 0px ${addColorProperties(
      theme.colors[color],
      0.3,
    )}`,
    color: theme.colors.white,
    border: 'none',
  },
]);

export default Button;
