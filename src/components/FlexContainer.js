import styled from '@emotion/styled'

const FlexContainer = styled.div(
  ({ flex = null, row = false, align = 'stretch', justify = 'flex-start' }) => [
    {
      display: 'flex',
      flex,
      flexDirection: row ? 'row' : 'column',
      alignItems: align,
      justifyContent: justify,
    },
  ]
)

export default FlexContainer
