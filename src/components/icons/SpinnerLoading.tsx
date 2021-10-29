import React from 'react'
import styled from 'styled-components'
import { ColumnCenter } from '../Layout/Column'

const Loading = styled(ColumnCenter)<{ size?: number }>`
  width: ${({ size }) => (size && `${size}px`) || '128px'};
  height: ${({ size }) => (size && `${0.73 * size}px`) || '93px'};
  background: url('/images/loading.gif') no-repeat;
  background-size: cover;
`
const SpinnerLoading = (props) => {
  const { size } = props
  return <Loading size={size} />
}

export default SpinnerLoading
