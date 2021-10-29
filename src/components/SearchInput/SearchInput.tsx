import React, { useState, useMemo } from 'react'
import { Input, Image } from '@pancakeswap/uikit'
import styled from 'styled-components'
import debounce from 'lodash/debounce'
import { useTranslation } from 'contexts/Localization'

const StyledInput = styled(Input)`
  border-radius: 16px;
  margin-left: auto;
  background-color: #fff;
  border: none;
  padding-left: 28px;
  width: 165px;
  &::-webkit-input-placeholder {
    color: #a6a6b7;
  }
  &:focus:not(:disabled) {
    box-shadow: none;
  }
`

const InputWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.mediaQueries.sm} {
    display: block;
  }
`

const StyledImage = styled(Image)`
  position: absolute;
  top: 12px;
  left: 8px;
`

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}

const SearchInput: React.FC<Props> = ({ onChange: onChangeCallback, placeholder = 'Search' }) => {
  const [searchText, setSearchText] = useState('')

  const { t } = useTranslation()

  const debouncedOnChange = useMemo(
    () => debounce((e: React.ChangeEvent<HTMLInputElement>) => onChangeCallback(e), 500),
    [onChangeCallback],
  )

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
    debouncedOnChange(e)
  }

  return (
    <InputWrapper>
      <StyledImage src="/images/search.png" alt="" width={16} height={16} />
      <StyledInput value={searchText} onChange={onChange} placeholder={t(placeholder)} />
    </InputWrapper>
  )
}

export default SearchInput
