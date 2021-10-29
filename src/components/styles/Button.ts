import styled from 'styled-components'
import { Button as RawButton, ButtonProps } from '@pancakeswap/uikit'
import React from 'react'

function createStyledButton(br: number) {
  return styled(RawButton)`
    border-radius: ${br}px;
    color: #fff;
    background: ${({ theme }) => theme.colors.primary};
    box-shadow: none;

    &[data-variant='primary'] {
    }

    &[data-variant='tertiary'] {
      color: ${({ theme }) => theme.colors.primary};
      background: rgba(78, 60, 251, 0.08);
    }
  ` as <E extends React.ElementType<any> = 'button'>(props: ButtonProps<E>) => JSX.Element
}
const Button = createStyledButton(8)

export const Button4 = createStyledButton(4)

export default Button
