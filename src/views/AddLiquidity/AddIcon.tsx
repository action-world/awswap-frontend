import React from 'react'
import { Svg, SvgProps } from '@pancakeswap/uikit'

const ArrowDownIcon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 42 42" {...props}>
      <rect x="0.502686" y="0.989014" width="40" height="40" rx="20" fill="#32324A" />
      <path d="M13.8247 20.989H27.1807" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20.5024 27.667L20.5024 14.311"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default ArrowDownIcon
