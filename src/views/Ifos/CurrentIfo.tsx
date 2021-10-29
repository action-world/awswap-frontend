import React from 'react'
import { ifosConfig } from 'config/constants'
import useGetPublicIfoV2Data from 'views/Ifos/hooks/v2/useGetPublicIfoData'
import useGetWalletIfoV2Data from 'views/Ifos/hooks/v2/useGetWalletIfoData'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import IfoFoldableCard from './components/IfoFoldableCard'
import IfoLayout from './components/IfoLayout'
import IfoSteps from './components/IfoSteps'
import IfoQuestions from './components/IfoQuestions'

/**
 * Note: currently there should be only 1 active IFO at a time
 */
const activeIfo = ifosConfig.find((ifo) => ifo.isActive)

const getGradient1 = (isDark: boolean) => {
  if (isDark) {
    return '/images/Frame1.svg'
  }
  return '/images/Frame1.svg'
}

const getGradient2 = (isDark: boolean) => {
  if (isDark) {
    return '/images/Frame2.svg'
  }
  return '/images/Frame2.svg'
}

const getGradient3 = (isDark: boolean) => {
  if (isDark) {
    return '/images/Frame3.svg'
  }
  return '/images/Frame3.svg'
}

const FrameGroup = styled.div`
  display: flex;
  width: 100%;
  margin: 10px auto;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`

const Frame1 = styled.div`
  height: 68px;
  margin: 0 40px 20px;
  width: 287px;
  text-align: center;
  line-height: 68px;
  background: url(${({ theme }) => getGradient1(theme.isDark)}) no-repeat;
  // background-size: 100% auto;
`
const Frame2 = styled.div`
  height: 68px;
  width: 287px;
  background: url(${({ theme }) => getGradient2(theme.isDark)}) no-repeat;
  margin: 0 40px 20px;
  text-align: center;
  line-height: 68px;
  // background-size: 100% auto;
`

const Frame3 = styled.div`
  height: 68px;
  width: 287px;
  background: url(${({ theme }) => getGradient3(theme.isDark)}) no-repeat;
  // background-size: 100% auto;
  text-align: center;
  line-height: 68px;
  margin: 0 40px 20px;
`
const Ifo = () => {
  const { t } = useTranslation()

  // const publicIfoData = useGetPublicIfoV2Data(activeIfo)
  // const walletIfoData = useGetWalletIfoV2Data(activeIfo)

  return (
    <IfoLayout>
      <FrameGroup>
        <Frame1> {t('Frame1')}</Frame1>
        <Frame2> {t('Frame2')}</Frame2>
        <Frame3> {t('Frame3')}</Frame3>
      </FrameGroup>
      {/* <IfoFoldableCard ifo={activeIfo} publicIfoData={publicIfoData} walletIfoData={walletIfoData} isInitiallyVisible /> */}
      {/* <IfoSteps ifo={activeIfo} walletIfoData={walletIfoData} /> */}
      <IfoQuestions />
    </IfoLayout>
  )
}

export default Ifo
