import React, { useRef } from 'react'
import styled from 'styled-components'
import { Button, ChevronUpIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { Pool } from 'state/types'
import PoolRow from './PoolRow'

interface PoolsTableProps {
  pools: Pool[]
  userDataLoaded: boolean
  account: string
}

const StyledTable = styled.div`
  border-radius: ${({ theme }) => theme.radii.card};

  background-color: ${({ theme }) => theme.card.background};
  > div:not(:last-child) {
    border-bottom: 10px solid ${({ theme }) => theme.colors.background};
  }
  div.expanded {
    border-bottom: 0;
  }
`

const StyledTableBorder = styled.div`
  border-radius: ${({ theme }) => theme.radii.card};
  // background-color: ${({ theme }) => theme.colors.background};
  padding: 1px 1px 3px 1px;
  background-size: 400% 400%;
  position: relative;
  margin-bottom: 90px;
`

const ScrollButtonContainer = styled.div`
  padding: 8px 0;
  background: #fff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
`

const PoolsTable: React.FC<PoolsTableProps> = ({ pools, userDataLoaded, account }) => {
  const { t } = useTranslation()
  const tableWrapperEl = useRef<HTMLDivElement>(null)
  const scrollToTop = (): void => {
    tableWrapperEl.current.scrollIntoView({
      behavior: 'smooth',
    })
  }
  return (
    <StyledTableBorder>
      <StyledTable role="table" ref={tableWrapperEl}>
        {pools.map((pool) => (
          <PoolRow
            key={pool.isAutoVault ? 'auto-cake' : pool.sousId}
            pool={pool}
            account={account}
            userDataLoaded={userDataLoaded}
          />
        ))}
      </StyledTable>
      <ScrollButtonContainer>
        <Button variant="text" onClick={scrollToTop} style={{ color: '#261977' }} height="auto">
          {t('To Top')}
          <ChevronUpIcon color="#A6A6B7" />
        </Button>
      </ScrollButtonContainer>
    </StyledTableBorder>
  )
}

export default PoolsTable
