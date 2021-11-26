import { ChainId, Token } from '@awswap/sdk'

export const USDT: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x41515885251e724233c6cA94530d6dcf3A20dEc7',
    18,
    'USDT',
    'Halo-Peg USDT',
  ),
}

export const AW: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x0c4Cc6eaA9fc4aAd02f939766ea9cE4a77D2B5cc', 18, 'AW', 'Action world'),
}

export const WHO: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xCb12e98C94A6274fA9e2F446e05B84cd27867142', 18, 'WHO', 'WHO'),
}

const tokens = {
  bnb: {
    symbol: 'HO',
    projectLink: 'https://halo.land',
  },
  who: {
    symbol: 'WHO',
    address: {
      1280: '0xCb12e98C94A6274fA9e2F446e05B84cd27867142',
    },
    decimals: 18,
  },
  usdt: {
    symbol: 'USDT',
    address: {
      1280: '0x41515885251e724233c6cA94530d6dcf3A20dEc7',
    },
    decimals: 18,
  },
  aw: {
    symbol: 'AW',
    address: {
      1280: '0x0c4Cc6eaA9fc4aAd02f939766ea9cE4a77D2B5cc',
    },
    decimals: 18,
  },
}

export default tokens
