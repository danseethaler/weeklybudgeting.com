import _ from 'lodash';
import {ThemeProvider} from 'emotion-theming';
import React, {useState, useEffect} from 'react';
import {default as themes, Theme} from '../config/themes';

const EmotionProvider = ({children}) => {
  const [deviceSize, setDeviceSize] = useState('phone');
  const [smallDevice, setPageSize] = useState(false);

  const resizeListener = () => {
    var width = document.documentElement.clientWidth;

    let newDeviceSize = 'desktop';
    let newSmallSize = false;

    if (width < 576) {
      newDeviceSize = 'phone';
      newSmallSize = true;
    } else if (width < 768) {
      newDeviceSize = 'tablet';
      newSmallSize = true;
    } else if (width < 992) {
      newDeviceSize = 'laptop';
      newSmallSize = true;
    } else {
      newDeviceSize = 'desktop';
      newSmallSize = false;
    }

    setDeviceSize(newDeviceSize);
    setPageSize(newSmallSize);
  };

  useEffect(() => {
    resizeListener();

    return window.addEventListener(
      'resize',
      _.debounce(resizeListener, 250, {leading: true}),
    );
  }, []);

  return (
    <ThemeProvider
      theme={{
        ...themes.light,
        smallDevice,
        deviceSize,
      }}>
      {children}
    </ThemeProvider>
  );
};

export default EmotionProvider;
