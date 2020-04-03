import {ThemeProvider} from 'emotion-theming';
import React from 'react';
import themes from './src/config/themes';
import './src/styles/globalStyles.css';

export const wrapRootElement = ({element}) => (
  <ThemeProvider theme={themes.light}>{element}</ThemeProvider>
);
