import React from 'react';
import {useStyledTheme} from '../../config/styled';
import {ColorKeys} from '../../config/themes';
import BlockContainer, {BlockContainerProps} from './BlockContainer';

interface Props extends BlockContainerProps {
  bgColor?: ColorKeys;
}

const SliceContainer: React.FC<Props> = ({children, bgColor, ...props}) => {
  const theme = useStyledTheme();

  return (
    <div style={{backgroundColor: theme.colors[bgColor]}}>
      <BlockContainer
        wMargin="auto"
        customStyles={{
          maxWidth: theme.containerWidth,
        }}
        {...props}>
        {children}
      </BlockContainer>
    </div>
  );
};

export default SliceContainer;
