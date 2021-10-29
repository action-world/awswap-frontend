import React from 'react'
import { Flex, IconButton, useModal } from '@pancakeswap/uikit'
import SettingsModal from './SettingsModal'
import CogIcon from './CogIcon'

const GlobalSettings = () => {
  const [onPresentSettingsModal] = useModal(<SettingsModal />)

  return (
    <Flex>
      <IconButton onClick={onPresentSettingsModal} variant="text" scale="sm" mr="8px">
        <CogIcon height={22} width={22} color="textSubtle" />
      </IconButton>
    </Flex>
  )
}

export default GlobalSettings
