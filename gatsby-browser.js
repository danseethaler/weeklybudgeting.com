import React from 'react';
import {ThemeProvider} from 'emotion-theming';
import themes from './src/config/themes';

export const wrapRootElement = ({element}) => (
  <ThemeProvider theme={themes.light}>{element}</ThemeProvider>
);
