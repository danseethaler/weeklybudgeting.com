import {
  CSSPropertiesWithMultiValues,
  CSSPseudosForCSSObject,
} from '@emotion/serialize';
import styled, {CreateStyled} from '@emotion/styled';
import {useTheme} from 'emotion-theming';
import {Theme} from './themes';

export type StyleType = CSSPropertiesWithMultiValues & CSSPseudosForCSSObject;

export type CustomStyles = {customStyles?: StyleType};

export interface ThemeProp {
  theme: Theme;
}

export const useStyledTheme = () => useTheme<Theme>();

export default styled as CreateStyled<Theme>;
