import React from 'react'
import styled from 'styled-components'
import LogoIcon from './LogoIcon'

const Text = styled.span<{ isDark: boolean }>`
  font-weight: bold;
  font-size: 24px;
  color: ${({ isDark }) => (isDark ? '#fff' : '#000')};
`

const Icon: React.FC<any> = ({ isDark, className, ...props }) => {
  return (
    <div className={className}>
      <Text isDark={isDark}>HOSWAP</Text>
    </div>
  )
}

export default Icon
