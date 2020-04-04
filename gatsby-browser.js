import React from 'react';
import EmotionProvider from './src/providers/ThemeProvider';
import './src/styles/globalStyles.css';

export const wrapRootElement = ({element}) => (
  <EmotionProvider>{element}</EmotionProvider>
);
