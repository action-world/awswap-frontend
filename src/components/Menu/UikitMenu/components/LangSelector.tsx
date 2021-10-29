import React from 'react'
import { Text, Dropdown, LanguageIcon, Flex } from '@pancakeswap/uikit'
import { Language } from '../types'
import MenuButton from './MenuButton'

interface Props {
  currentLang: string
  langs: Language[]
  setLang: (lang: Language) => void
  position?: 'top' | 'top-right' | 'bottom'
}

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang, position = 'top-right' }) => (
  <Dropdown
    position={position}
    target={
      <Flex style={{ cursor: 'pointer' }}>
        <LanguageIcon color="text" width="24px" mr={1} />
        <Text color="text">{currentLang?.toUpperCase()}</Text>
      </Flex>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.locale}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: '32px', height: 'auto' }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
)

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang)
