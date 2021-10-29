import React from 'react'
import { TokenPairImage, ImageProps, Image } from '@pancakeswap/uikit'
import tokens from 'config/constants/tokens'
import { getAddress } from 'utils/addressHelpers'

const CakeVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const primaryTokenSrc = `/images/tokens/${getAddress(tokens.usdt.address)}.svg`

  return <Image {...props} src="/images/tokens/autorenew.svg" />
  return <TokenPairImage primarySrc={primaryTokenSrc} secondarySrc="/images/tokens/autorenew.svg" {...props} />
}

export default CakeVaultTokenPairImage
