import {CustomStyles, ThemeProp} from '../../config/styled';
import {
  themedMargin,
  themedPadding,
  ThemeMarginProps,
  ThemePaddingProps,
} from '../../config/themedFunctions';

export type SpacingComponentProps = ThemeMarginProps &
  ThemePaddingProps &
  CustomStyles;

export const sharedSpacingStyles = ({
  customStyles,
}: ThemeProp & SpacingComponentProps) => [
  themedMargin,
  themedPadding,
  customStyles,
];
