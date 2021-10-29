import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'FAR/USDT-LP',
    lpAddresses: {
      1280: '0x48806Cc7104201BDefA428E92Da3FD4A18B3b9E1',
    },
    token: tokens.far,
    quoteToken: tokens.usdt,
    earningToken: tokens.farc,
  },
  {
    pid: 1,
    lpSymbol: 'FAR/FARC-LP',
    lpAddresses: {
      1280: '0xD492Aa53F64B6477508a190596Bc2b88791D94ad',
    },
    token: tokens.farc,
    quoteToken: tokens.far,
    earningToken: tokens.farc,
  },
  {
    pid: 2,
    lpSymbol: 'ZEED/USDT-LP',
    lpAddresses: {
      1280: '0xc4Ba334ac31D0320699D7e47636671729A61D0d8',
    },
    token: tokens.zeed,
    quoteToken: tokens.usdt,
    earningToken: tokens.zeed,
  },
  {
    pid: 3,
    lpSymbol: 'FAR/ZEED-LP',
    lpAddresses: {
      1280: '0x70f0a518f9bACf8d481F8B491aD91dF38333816c',
    },
    token: tokens.zeed,
    quoteToken: tokens.far,
    earningToken: tokens.zeed,
  },
]

export default farms
