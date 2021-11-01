import React, { useState } from 'react'
import { Token } from '@aswap/awswap-sdk'
import { ButtonMenu, ButtonMenuItem, ModalBody } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { TokenList } from '@uniswap/token-lists'
import { useTranslation } from 'contexts/Localization'
import ManageLists from './ManageLists'
import ManageTokens from './ManageTokens'
import { CurrencyModalView } from './types'

const StyledButtonMenu = styled(ButtonMenu)`
  width: 100%;
  background-color: #fff;
  border-color: #7a6eaa;

  > button {
    background: #fff;
    border-color: #fff;
    box-shadow: none;
  }

  button[data-active='true'] {
    color: #fff;
    background: ${({ theme }) => theme.colors.primary};
  }
`

export default function Manage({
  setModalView,
  setImportList,
  setImportToken,
  setListUrl,
}: {
  setModalView: (view: CurrencyModalView) => void
  setImportToken: (token: Token) => void
  setImportList: (list: TokenList) => void
  setListUrl: (url: string) => void
}) {
  const [showLists, setShowLists] = useState(true)

  const { t } = useTranslation()

  return (
    <ModalBody>
      <StyledButtonMenu
        activeIndex={showLists ? 0 : 1}
        onItemClick={() => setShowLists((prev) => !prev)}
        scale="sm"
        variant="subtle"
        mb="32px"
      >
        <ButtonMenuItem width="50%" data-active={!!showLists}>
          {t('Lists')}
        </ButtonMenuItem>
        <ButtonMenuItem width="50%" data-active={!showLists}>
          {t('Tokens')}
        </ButtonMenuItem>
      </StyledButtonMenu>
      {showLists ? (
        <ManageLists setModalView={setModalView} setImportList={setImportList} setListUrl={setListUrl} />
      ) : (
        <ManageTokens setModalView={setModalView} setImportToken={setImportToken} />
      )}
    </ModalBody>
  )
}
