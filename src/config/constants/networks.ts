import { ChainId } from '@aswap/awswap-sdk'

const NETWORK_URLS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: 'https://nodes.halo.land',
}

export default NETWORK_URLS
