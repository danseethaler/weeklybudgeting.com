import {CustomStyles, ThemeProp} from './styled';
import {
  themedFontSize,
  themedFontWeight,
  themedMargin,
  themedPadding,
  themedTextColors,
  ThemeFontSizeProps,
  ThemeFontWeightProps,
  ThemeMarginProps,
  ThemePaddingProps,
  ThemeTextColorProps,
  truncatedText,
  TruncateProps,
} from './themedFunctions';

export type TypographyComponentProps = ThemeMarginProps &
  ThemePaddingProps &
  ThemeFontSizeProps &
  ThemeFontWeightProps &
  ThemeTextColorProps &
  TruncateProps &
  CustomStyles & {
    align?: 'left' | 'right' | 'center' | 'justify';
  };

export const sharedTypographyStyles = ({
  theme,
  align = 'left',
  customStyles = {},
}: ThemeProp & TypographyComponentProps) => [
  themedMargin,
  themedPadding,
  themedFontSize,
  themedFontWeight,
  themedTextColors,
  truncatedText,
  {
    fontFamily: theme.fontFamily.default,
    textAlign: align,
  },
  customStyles,
];
