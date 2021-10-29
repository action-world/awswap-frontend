import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import {
  // LinkExternal,
  Text,
  Button,
} from '@pancakeswap/uikit'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { getAddress } from 'utils/addressHelpers'
import { getBscScanLink } from 'utils'
import {
  // CoreTag,
  CommunityTag,
  DualTag,
} from 'components/Tags'
import HarvestAction from './HarvestAction'
import StakedAction from './StakedAction'
import Apr, { AprProps } from '../Apr'
import Multiplier, { MultiplierProps } from '../Multiplier'
import Liquidity, { LiquidityProps } from '../Liquidity'

export interface ActionPanelProps {
  apr: AprProps
  multiplier: MultiplierProps
  liquidity: LiquidityProps
  details: FarmWithStakedValue
  userDataReady: boolean
  expanded: boolean
}

const expandAnimation = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 500px;
  }
`

const collapseAnimation = keyframes`
  from {
    max-height: 500px;
  }
  to {
    max-height: 0px;
  }
`

const Container = styled.div<{ expanded }>`
  animation: ${({ expanded }) =>
    expanded
      ? css`
          ${expandAnimation} 300ms linear forwards
        `
      : css`
          ${collapseAnimation} 300ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  background: #f5f8fd;
  display: flex;
  width: 100%;
  flex-direction: column-reverse;
  padding: 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 32px 16px;
  }
`

// const StyledLinkExternal = styled(LinkExternal)`
//   font-weight: 400;
// `

const StakeContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
  }
`

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-top: 16px;
  }

  > div {
    height: 24px;
    padding: 0 6px;
    font-size: 14px;
    margin-right: 4px;

    svg {
      width: 14px;
    }
  }
`

const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
    flex-grow: 1;
    flex-basis: 0;
  }
`

const InfoContainer = styled.div`
  min-width: 200px;
`

const ValueContainer = styled.div`
  display: block;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`

const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0px;
`

const ATag = styled(Button)`
  display: flex;
  align-items: center;
  width: fit-content;
  color: #261977;
  padding: 0 11px;
  height: 24px;
  line-height: 24px;
  border-radius: 50px;
  font-size: 12px;
  text-align: center;
  border: 1px solid #261977;
`

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 22px;
    height: 22px;
    position: absolute;
    left: 0;
  }
`
const BgCom = styled.div`
  color: #ffffff;
  text-align: center;
  line-height: 17px;
  width: 45px;
  height: 18px;
  font-size: 10px;
  font-family: PingFang SC;
  font-style: normal;
  background: url(/images/kernel1.png) left top no-repeat;
  background-size: 100%;
  margin-left: 6px;
`

const TagComponent = (props) => {
  const { text } = props
  return (
    <DivWrapper>
      <img src="/images/kernel2.png" alt="" />
      <BgCom>{text}</BgCom>
    </DivWrapper>
  )
}

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({
  details,
  apr,
  multiplier,
  liquidity,
  userDataReady,
  expanded,
}) => {
  const farm = details

  const { t } = useTranslation()
  const isActive = farm.multiplier !== '0X'
  const { quoteToken, token, dual } = farm
  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: quoteToken.address,
    tokenAddress: token.address,
  })
  const lpAddress = getAddress(farm.lpAddresses)
  const bsc = getBscScanLink(lpAddress, 'address')
  const info = `https://pancakeswap.info/pool/${lpAddress}`

  return (
    <Container expanded={expanded}>
      <InfoContainer>
        {isActive && (
          <StakeContainer>
            <ATag as="a" href={`/add/${liquidityUrlPathParts}`} target="_blank" style={{ marginRight: 10 }}>
              {t('Get %symbol%', { symbol: lpLabel })}
            </ATag>
            <ATag as="a" href={bsc} target="_blank">
              {t('View Contract')}
            </ATag>
          </StakeContainer>
        )}
        {/* <ATag as="a" href={info} target="_blank" style={{ marginTop: 9, background: "#261977", color: '#fff' }} >
          {t('See Pair Info')}
        </ATag> */}
        <TagsContainer>
          {/* {farm.isCommunity ? <CommunityTag /> : <CoreTag />} */}
          {/* {farm.isCommunity ? <CommunityTag /> : <TagComponent text={t('Core')} />} */}
          {farm.isCommunity ? <CommunityTag /> : null}
          {dual ? <DualTag /> : null}
        </TagsContainer>
      </InfoContainer>
      <ValueContainer>
        <ValueWrapper>
          <Text color="#261977">{t('APR')}</Text>
          <Apr {...apr} />
        </ValueWrapper>
        <ValueWrapper>
          <Text color="#261977">{t('Liquidity')}</Text>
          <Liquidity {...liquidity} />
        </ValueWrapper>
      </ValueContainer>
      <ActionContainer>
        <HarvestAction {...farm} userDataReady={userDataReady} />
        <StakedAction {...farm} userDataReady={userDataReady} lpLabel={lpLabel} displayApr={apr.value} />
      </ActionContainer>
    </Container>
  )
}

export default ActionPanel
