import { ChainId, Token } from '@farswap/farswap-sdk'

export const USDT: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x41515885251e724233c6cA94530d6dcf3A20dEc7',
    18,
    'USDT',
    'Halo-Peg USDT',
  ),
}

export const FAR: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0x4A9C0bcd5500E2D8135aC6ec9504bEFb5AE59266',
    18,
    'FAR',
    'Halo-Peg Far Token',
  ),
}

export const FARC: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x3Fb94052881f43C160aee6c8E1ACd6234830EEF2', 18, 'FARC', 'FARC Token'),
}

export const WHO: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0x34024eE6941343924e8720F5F4B8f22B0274D993', 18, 'WHO', 'WHO'),
}

const tokens = {
  bnb: {
    symbol: 'HO',
    projectLink: 'https://halo.land',
  },
  who: {
    symbol: 'WHO',
    address: {
      1280: '0x34024eE6941343924e8720F5F4B8f22B0274D993',
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
  far: {
    symbol: 'FAR',
    address: {
      1280: '0x4A9C0bcd5500E2D8135aC6ec9504bEFb5AE59266',
    },
    decimals: 18,
  },
  farc: {
    symbol: 'FARC',
    address: {
      1280: '0x3Fb94052881f43C160aee6c8E1ACd6234830EEF2',
    },
    decimals: 18,
  },
  zeed: {
    symbol: 'ZEED',
    address: {
      1280: '0xF20073A15FdD8E30d29F53D08FABE7E8A4b60223',
    },
    decimals: 18,
  },
}

export default tokens
