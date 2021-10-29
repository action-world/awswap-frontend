import React from 'react'
import { Svg, SvgProps } from '@pancakeswap/uikit'

const ArrowDownIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 42 42" {...props}>
      <rect x="0.997314" y="0.633301" width="40" height="40" rx="20" fill="#32324A" />
      <path
        d="M17.9973 24.6333L20.9973 27.6333L23.9973 24.6333"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9973 13.6333V27.6333"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowDownIcon
