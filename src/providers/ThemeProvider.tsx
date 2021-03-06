import {ThemeProvider} from 'emotion-theming';
import _ from 'lodash';
import React, {useEffect, useState} from 'react';
import {default as themes, getThemeSizes} from '../config/themes';

const EmotionProvider = ({children}) => {
  const [themeSizes, setThemeSizes] = useState(getThemeSizes());

  useEffect(() => {
    const resizeHandler = () => {
      setThemeSizes(getThemeSizes());
    };

    return window.addEventListener(
      'resize',
      _.debounce(resizeHandler, 250, {leading: true}),
    );
  }, []);

  return (
    <ThemeProvider
      theme={{
        ...themes.light,
        ...themeSizes,
      }}>
      {children}
    </ThemeProvider>
  );
};

export default EmotionProvider;
