import styled, {CreateStyled} from '@emotion/styled';
import {useTheme} from 'emotion-theming';
import {Theme} from './themes';

export interface ThemeProp {
  theme: Theme;
}

export const useStyledTheme = () => useTheme<Theme>();

export default styled as CreateStyled<Theme>;
