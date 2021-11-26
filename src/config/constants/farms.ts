import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'FAR/USDT-LP',
    lpAddresses: {
      1280: '0x48806Cc7104201BDefA428E92Da3FD4A18B3b9E1',
    },
    token: tokens.aw,
    quoteToken: tokens.usdt,
    earningToken: tokens.aw,
  },
]

export default farms
