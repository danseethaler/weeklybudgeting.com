import styled from '../../config/styled';
import {sharedSpacingStyles, SpacingComponentProps} from './spacing';
import {ColorKeys} from '../../config/themes';

interface BoxContainerProps {
  bgColor?: ColorKeys;
}

export type BlockContainerProps = BoxContainerProps & SpacingComponentProps;

const BlockContainer = styled.div<BlockContainerProps>(({theme, bgColor}) => [
  sharedSpacingStyles,
  {
    backgroundColor: theme.colors[bgColor],
  },
]);

export default BlockContainer;
