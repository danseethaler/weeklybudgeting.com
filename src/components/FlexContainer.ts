import styled from '@emotion/styled';

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

const FlexContainer = styled.div<FlexComponentProps>(
  ({flex = null, row = false, align = 'stretch', justify = 'flex-start'}) => [
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
