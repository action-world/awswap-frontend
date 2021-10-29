import React from 'react'
import styled, { keyframes, css } from 'styled-components'
import {
  Box,
  Button,
  Flex,
  HelpIcon,
  Link,
  Skeleton,
  Text,
  TimerIcon,
  useTooltip,
  AutoRenewIcon,
  RefreshIcon,
} from '@pancakeswap/uikit'
import { BASE_BROWSER_URLS, BASE_BSC_SCAN_URL } from 'config'
import { getBscScanLink } from 'utils'
import { useBlock } from 'state/block/hooks'
import { useCakeVault } from 'state/pools/hooks'
import BigNumber from 'bignumber.js'
import { Pool } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import { getAddress, getCakeVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import { registerToken } from 'utils/wallet'
import { getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import { convertSharesToCake, getPoolBlockInfo } from 'views/Pools/helpers'
import Harvest from './Harvest'
import Stake from './Stake'
import Apr from '../Apr'
import AutoHarvest from './AutoHarvest'

const expandAnimation = keyframes`
  from {
    max-height: 0px;
  }
  to {
    max-height: 700px;
  }
`

const collapseAnimation = keyframes`
  from {
    max-height: 700px;
  }
  to {
    max-height: 0px;
  }
`

const StyledActionPanel = styled.div<{ expanded: boolean }>`
  animation: ${({ expanded }) =>
    expanded
      ? css`
          ${expandAnimation} 300ms linear forwards
        `
      : css`
          ${collapseAnimation} 300ms linear forwards
        `};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.dropdown};
  background: #f5f8fd;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  padding: 12px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex-direction: row;
    padding: 16px 32px;
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

type MediaBreakpoints = {
  isXs: boolean
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  isXxl: boolean
}

interface ActionPanelProps {
  account: string
  pool: Pool
  userDataLoaded: boolean
  expanded: boolean
  breakpoints: MediaBreakpoints
}

const InfoSection = styled(Box)`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: auto;
  padding: 8px 8px;
  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0;
    flex-basis: 260px;
  }
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
  position: relative;
  display: float;
  img {
    width: 22px;
    height: 22px;
    position: absolute;
    left: 0;
    top: -2px;
  }
`
const TagLeftBg = styled.div`
  position: absolute;
  left: 0px;
  top: -2px;
  display: inline-block;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  background: url(/images/pools/pools-tag-left-bg.png) left top no-repeat;
  background-size: 100%;
`
const TagRightBg = styled.div`
  display: inline-block;
  padding: 3px 12px 3px 17px;
  color: #fff;
  text-align: center;
  font-size: 10px;
  font-family: PingFang SC;
  font-style: normal;
  background: url(/images/pools/pools-tag-right-bg.png) left top no-repeat;
  background-size: 100%;
  margin-left: 12px;
`

const IconWrapper = styled.div`
  position: relative;
  display: float;
  margin-top: 20px;
`

const ActionPanel: React.FC<ActionPanelProps> = ({ account, pool, userDataLoaded, expanded, breakpoints }) => {
  const {
    sousId,
    stakingToken,
    earningToken,
    totalStaked,
    startBlock,
    endBlock,
    stakingLimit,
    contractAddress,
    userData,
    isAutoVault,
  } = pool
  const { t } = useTranslation()
  const poolContractAddress = getAddress(contractAddress)
  const cakeVaultContractAddress = getCakeVaultAddress()
  const { currentBlock } = useBlock()
  const { isXs, isSm, isMd } = breakpoints
  const showSubtitle = (isXs || isSm) && sousId === 0

  const { shouldShowBlockCountdown, blocksUntilStart, blocksRemaining, hasPoolStarted, blocksToDisplay } =
    getPoolBlockInfo(pool, currentBlock)

  const isMetaMaskInScope = !!window.ethereum?.isMetaMask
  const tokenAddress = earningToken.address ? getAddress(earningToken.address) : ''

  const {
    totalCakeInVault,
    userData: { userShares },
    fees: { performanceFee },
    pricePerFullShare,
  } = useCakeVault()

  const stakingTokenBalance = userData?.stakingTokenBalance ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO
  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const { cakeAsBigNumber } = convertSharesToCake(userShares, pricePerFullShare)
  const poolStakingTokenBalance = isAutoVault
    ? cakeAsBigNumber.plus(stakingTokenBalance)
    : stakedBalance.plus(stakingTokenBalance)

  const performanceFeeAsDecimal = performanceFee && performanceFee / 100
  const isManualCakePool = sousId === 0

  const TagComponent = (props) => {
    const { text } = props
    return (
      <DivWrapper>
        <TagLeftBg>
          {isAutoVault ? <AutoRenewIcon width="12px" color="#fff" /> : <RefreshIcon width="12px" color="#fff" />}
        </TagLeftBg>
        <TagRightBg>{text}</TagRightBg>
      </DivWrapper>
    )
  }

  const getTotalStakedBalance = () => {
    if (isAutoVault) {
      return getBalanceNumber(totalCakeInVault, stakingToken.decimals)
    }
    if (isManualCakePool) {
      const manualCakeTotalMinusAutoVault = new BigNumber(totalStaked).minus(totalCakeInVault)
      return getBalanceNumber(manualCakeTotalMinusAutoVault, stakingToken.decimals)
    }
    return getBalanceNumber(totalStaked, stakingToken.decimals)
  }

  const {
    targetRef: totalStakedTargetRef,
    tooltip: totalStakedTooltip,
    tooltipVisible: totalStakedTooltipVisible,
  } = useTooltip(t('Total amount of %symbol% staked in this pool', { symbol: stakingToken.symbol }), {
    placement: 'bottom',
  })

  const manualTooltipText = t('You must harvest and compound your earnings from this pool manually.')
  const autoTooltipText = t(
    'Any funds you stake in this pool will be automagically harvested and restaked (compounded) for you.',
  )

  const {
    targetRef: tagTargetRef,
    tooltip: tagTooltip,
    tooltipVisible: tagTooltipVisible,
  } = useTooltip(isAutoVault ? autoTooltipText : manualTooltipText, {
    placement: 'bottom-start',
  })

  const maxStakeRow = stakingLimit.gt(0) ? (
    <Flex mb="8px" justifyContent="space-between">
      <Text>{t('Max. stake per user')}:</Text>
      <Text>{`${getFullDisplayBalance(stakingLimit, stakingToken.decimals, 0)} ${stakingToken.symbol}`}</Text>
    </Flex>
  ) : null

  const blocksRow =
    blocksRemaining || blocksUntilStart ? (
      <Flex mb="8px">
        <Text color="#261977">{hasPoolStarted ? t('Ends in') : t('Starts in')}:</Text>
        <Flex ml="10px">
          <Link external href={getBscScanLink(hasPoolStarted ? endBlock : startBlock, 'countdown')}>
            <Balance fontSize="16px" value={blocksToDisplay} decimals={0} color="#261977" />
            <Text ml="4px" color="primary" textTransform="lowercase">
              {t('Blocks')}
            </Text>
            <TimerIcon ml="4px" color="primary" />
          </Link>
        </Flex>
      </Flex>
    ) : (
      <Skeleton width="56px" height="16px" />
    )

  const aprRow = (
    <Flex justifyContent="space-between" alignItems="center" mb="8px">
      <Text color="#261977">{isAutoVault ? t('APY') : t('APR')}:</Text>
      <Apr
        pool={pool}
        showIcon
        color="#261977"
        stakedBalance={poolStakingTokenBalance}
        performanceFee={isAutoVault ? performanceFeeAsDecimal : 0}
      />
    </Flex>
  )

  const totalStakedRow = (
    <Flex justifyContent="space-between" alignItems="center" mb="8px">
      <Text color="#261977" maxWidth={['50px', '100%']}>
        {t('Total staked')}:
      </Text>
      <Flex alignItems="center">
        {totalStaked && totalStaked.gte(0) ? (
          <>
            <Balance
              fontSize="16px"
              value={getTotalStakedBalance()}
              color="#261977"
              decimals={0}
              unit={` ${stakingToken.symbol}`}
            />
            <span ref={totalStakedTargetRef}>
              <HelpIcon color="textSubtle" width="20px" ml="4px" />
            </span>
          </>
        ) : (
          <Skeleton width="56px" height="16px" />
        )}
        {totalStakedTooltipVisible && totalStakedTooltip}
      </Flex>
    </Flex>
  )

  return (
    <StyledActionPanel expanded={expanded}>
      <InfoSection>
        {maxStakeRow}
        {(isXs || isSm) && aprRow}
        {(isXs || isSm || isMd) && totalStakedRow}
        {shouldShowBlockCountdown && blocksRow}
        <Flex mb="8px" justifyContent={['flex-end', 'flex-end', 'flex-start']}>
          {/* <ATag
            as="a"
            href={`https://pancakeswap.info/token/${getAddress(earningToken.address)}`}
            target="_blank"
            style={{ marginRight: 10 }}
          >
            {t('See Token Info')}
          </ATag> */}
          <ATag as="a" href={earningToken.projectLink} target="_blank">
            {t('View Project Site')}
          </ATag>
        </Flex>
        <Flex mb="8px" justifyContent={['flex-end', 'flex-end', 'flex-start']}>
          {poolContractAddress && (
            <ATag
              as="a"
              href={`${BASE_BROWSER_URLS}/address/${isAutoVault ? cakeVaultContractAddress : poolContractAddress}`}
              target="_blank"
              style={{ marginRight: 9, background: '#261977', color: '#fff' }}
            >
              {t('View Contract')}
            </ATag>
          )}
          {account && isMetaMaskInScope && tokenAddress && (
            <ATag
              variant="text"
              p="0"
              height="auto"
              style={{ marginRight: 9, fontWeight: 'normal' }}
              onClick={() => registerToken(tokenAddress, earningToken.symbol, earningToken.decimals)}
            >
              {t('Add to Metamask')}
            </ATag>
          )}
        </Flex>
        <Flex justifyContent={['flex-end', 'flex-end', 'flex-start']}>
          <IconWrapper>
            {isAutoVault ? <TagComponent text={t('Auto')} /> : <TagComponent text={t('Manual')} />}
            {tagTooltipVisible && tagTooltip}
            <span ref={tagTargetRef}>
              <HelpIcon ml="4px" width="20px" height="20px" color="textSubtle" />
            </span>
          </IconWrapper>
        </Flex>
      </InfoSection>
      <ActionContainer>
        {showSubtitle && (
          <Text mt="4px" color="#261977" mb="16px">
            {isAutoVault ? t('Automatic restaking') : `${t('Earn')} CAKE ${t('Stake').toLocaleLowerCase()} CAKE`}
          </Text>
        )}
        {pool.isAutoVault ? (
          <AutoHarvest {...pool} userDataLoaded={userDataLoaded} />
        ) : (
          <Harvest {...pool} userDataLoaded={userDataLoaded} />
        )}
        <Stake pool={pool} userDataLoaded={userDataLoaded} />
      </ActionContainer>
    </StyledActionPanel>
  )
}

export default ActionPanel
