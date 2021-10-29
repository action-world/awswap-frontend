import {
  MetamaskIcon as Metamask,
  WalletConnectIcon as WalletConnect,
  TrustWalletIcon as TrustWallet,
  MathWalletIcon as MathWallet,
  TokenPocketIcon as TokenPocket,
  BinanceChainIcon as BinanceChain,
  SafePalIcon as SafePal,
  Coin98Icon as Coin98,
} from '@pancakeswap/uikit'

import { Config, ConnectorNames } from './types'

const connectors: Config[] = [
  {
    title: 'Metamask',
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
    priority: 1,
  },
]

export default connectors
export const connectorLocalStorageKey = 'connectorIdv2'
export const walletLocalStorageKey = 'wallet'
