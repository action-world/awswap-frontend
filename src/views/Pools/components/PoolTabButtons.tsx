import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Select from 'components/Select/Select'
import ToggleView, { ViewMode } from './ToggleView/ToggleView'

const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${Text} {
    margin-left: 8px;
  }
`

const ViewControls = styled.div`
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
  align-items: center;
  width: 100%;

  > div {
    padding: 8px 0px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    justify-content: flex-start;
    width: auto;

    > div {
      padding: 0;
    }
  }
`

const RadioCom = styled.div`
  display: block;
  background: #fff;
  border: 1px solid #4e3cfb;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  position: relative;
  boxsizing: border-box;
  .sel {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #4e3cfb;
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
`

const PoolTabButtons = ({
  stakedOnly,
  setStakedOnly,
  hasStakeInFinishedPools,
  viewMode,
  setViewMode,
  handleSortOptionChange,
}) => {
  const { url, isExact } = useRouteMatch()
  const { t } = useTranslation()

  const viewModeToggle = <ToggleView viewMode={viewMode} onToggle={(mode: ViewMode) => setViewMode(mode)} />

  const stakedOnlySwitch = (
    <ToggleWrapper>
      <RadioCom onClick={() => setStakedOnly(!stakedOnly)}>{stakedOnly ? <div className="sel" /> : null}</RadioCom>
      <Text style={{ fontSize: '14px' }}> {t('Staked only')}</Text>
      <Text style={{ margin: '0 10px 0 20px', fontSize: '14px' }}>{t('Sort by')}</Text>
      <Select
        options={[
          {
            label: t('Hot'),
            value: 'hot',
          },
          {
            label: t('APR'),
            value: 'apr',
          },
          {
            label: t('Earned'),
            value: 'earned',
          },
          {
            label: t('Total staked'),
            value: 'totalStaked',
          },
        ]}
        onChange={handleSortOptionChange}
      />
    </ToggleWrapper>
  )

  return <ViewControls>{stakedOnlySwitch}</ViewControls>
}

export default PoolTabButtons
