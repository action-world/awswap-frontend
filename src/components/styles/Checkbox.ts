import { Checkbox } from '@pancakeswap/uikit'
import styled from 'styled-components'

export default styled(Checkbox)`
  &:checked {
    background-color: ${({ theme }) => theme.colors.primary};

    &:after {
      border-color: white;
    }
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: none;
  }
`
