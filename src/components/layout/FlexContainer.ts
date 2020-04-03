import styled from '../../config/styled';
import {sharedSpacingStyles, SpacingComponentProps} from './spacing';

interface FlexComponentProps {
  flex?: number;
  row?: boolean;
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

export type FlexContainerProps = FlexComponentProps & SpacingComponentProps;

const FlexContainer = styled.div<FlexContainerProps>(
  ({flex = null, row = false, align = 'stretch', justify = 'flex-start'}) => [
    sharedSpacingStyles,
    {
      display: 'flex',
      flex,
      flexDirection: row ? 'row' : 'column',
      alignItems: align,
      justifyContent: justify,
    },
  ],
);

export default FlexContainer;
