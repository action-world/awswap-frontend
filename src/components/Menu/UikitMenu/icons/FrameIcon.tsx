import React from 'react'
import { Svg, SvgProps } from '@pancakeswap/uikit'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 30 30" {...props}>
      <circle cx="11.791" cy="15.3902" r="5.87049" />
      <ellipse cx="20.5511" cy="15.3902" rx="2.88975" ry="5.87049" />
      <ellipse cx="24.6585" cy="15.3902" rx="1.2176" ry="5.87049" />
    </Svg>
  )
}

export default Icon
