import { Toggle } from '@pancakeswap/uikit'
import styled from 'styled-components'

export default styled(Toggle)`
  background-color: ${({ theme, checked }) => (checked ? theme.colors.primary : theme.colors.input)};
`

export const ToggleWrapper = styled.div<{ checked: boolean }>`
  > div {
    background-color: ${({ theme, checked }) => (checked ? theme.colors.primary : theme.colors.input)};

    > * {
      box-shadow: none !important;
    }
  }
`
