import * as _ from 'lodash';
import {ThemeProp, StyleType} from './styled';
import {ColorKeys, TextColorKeys} from './themes';

// Receives a number or array of numbers and returns an object with the margin
// property. The margin values are mapped over the baseUnit from the theme. Can
// also receive a string for values like "auto"
export interface ThemeMarginProps {
  wMargin?: (number | string) | (number | string)[];
  wMarginTop?: number | string;
  wMarginRight?: number | string;
  wMarginBottom?: number | string;
  wMarginLeft?: number | string;
}
export const themedMargin = ({
  theme,
  wMargin,
  wMarginTop = 0,
  wMarginRight = 0,
  wMarginBottom = 0,
  wMarginLeft = 0,
}: ThemeProp & ThemeMarginProps): {margin: string} => {
  const margins = _.isUndefined(wMargin)
    ? [wMarginTop, wMarginRight, wMarginBottom, wMarginLeft]
    : _.castArray(wMargin);

  const convertToCss = amount =>
    typeof amount === 'string' ? amount : `${amount * theme.baseUnit}px`;

  const marginCss = _.map(margins, convertToCss).join(' ');
  return {margin: marginCss};
};

// Receives a number or array of numbers and returns an object with the padding
// property. The padding values are mapped over the baseUnit from the theme. Can
// also receive a string for values like "auto"
export interface ThemePaddingProps {
  wPadding?: (number | string) | (number | string)[];
  wPaddingTop?: number | string;
  wPaddingRight?: number | string;
  wPaddingBottom?: number | string;
  wPaddingLeft?: number | string;
}
export const themedPadding = ({
  theme,
  wPadding,
  wPaddingTop = 0,
  wPaddingRight = 0,
  wPaddingBottom = 0,
  wPaddingLeft = 0,
}: ThemeProp & ThemePaddingProps): {padding: string} => {
  const paddings = _.isUndefined(wPadding)
    ? [wPaddingTop, wPaddingRight, wPaddingBottom, wPaddingLeft]
    : _.castArray(wPadding);

  const convertToCss = amount =>
    typeof amount === 'string' ? amount : `${amount * theme.baseUnit}px`;

  const paddingCss = _.map(paddings, convertToCss).join(' ');
  return {padding: paddingCss};
};

// Returns a dynamic font size based on the the theme fontUnit
export interface ThemeFontSizeProps {
  wFontSize?: number | string;
}
export const themedFontSize = ({
  theme,
  wFontSize = 1,
}: ThemeProp & ThemeFontSizeProps): {fontSize: string} => ({
  fontSize:
    typeof wFontSize === 'string'
      ? wFontSize
      : `${theme.fontUnit * wFontSize}px`,
});

// Returns a font weight based on a named font weight. Font names must match the
// theme.fontWeight object
export interface ThemeFontWeightProps {
  wFontWeight?:
    | 'regular'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
}
export const themedFontWeight = ({
  theme,
  wFontWeight = 'regular',
}: ThemeProp & ThemeFontWeightProps): {fontWeight: number} => ({
  fontWeight: theme.fontWeight[wFontWeight],
});

// Returns a wTheme color
export interface ThemeColorProps {
  wColor?: ColorKeys;
}
export const themedColors = ({
  theme,
  wColor = 'text400',
}: ThemeProp & ThemeColorProps): {color: string} => ({
  color: theme.colors[wColor],
});

// Returns a wTheme color from the text color keys
export interface ThemeTextColorProps {
  wColor?: TextColorKeys;
}
export const themedTextColors = ({
  theme,
  wColor = 'text400',
}: ThemeProp & ThemeTextColorProps): {color: string} => ({
  color: theme.colors[wColor],
});

// Returns styles that truncates the text
export interface TruncateProps {
  truncate?: boolean;
}
export const truncatedText = ({
  truncate = false,
}: ThemeProp & TruncateProps): StyleType =>
  truncate && {
    flex: '0 1 auto',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    minWidth: 0,
  };
