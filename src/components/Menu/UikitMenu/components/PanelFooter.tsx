import React from 'react'
import styled from 'styled-components'
import { CogIcon, IconButton } from '@pancakeswap/uikit'
import { MENU_ENTRY_HEIGHT } from '../config'
import { PanelProps, PushedProps } from '../types'
import ThemeSwitcher from './ThemeSwitcher'
import SocialLinks from './SocialLinks'
import LangSelector from './LangSelector'

interface Props extends PanelProps, PushedProps {}

const Container = styled.div<{ isPushed: boolean }>`
  flex: none;
  padding: ${({ isPushed }) => {
    return isPushed ? '8px 40px' : '8px 0'
  }};
  background-color: ${({ theme }) => theme.nav.background};
`

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
`

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: -5px;
    right: 0;
    height: 1px;
    background: #ededf1;
  }
`

const PanelFooter: React.FC<Props> = ({ isPushed, pushNav, toggleTheme, isDark, currentLang, langs, setLang }) => {
  if (!isPushed) {
    return (
      <Container isPushed={isPushed}>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    )
  }

  return (
    <Container isPushed={isPushed}>
      <SettingsEntry>
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
        <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
      </SettingsEntry>
    </Container>
  )
}

export default PanelFooter
