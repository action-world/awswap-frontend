import { Currency, ETHER, Token } from '@aswap/awswap-sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'HO'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}

export default currencyId
