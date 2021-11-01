import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex } from '@pancakeswap/uikit'
import { HamburgerIcon, HamburgerCloseIcon } from '../icons'
import MenuButton from './MenuButton'
import { ReactComponent as RawLogo } from '../logo.svg'

interface Props {
  isPushed: boolean
  isDark: boolean
  togglePush: () => void
  href: string
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`

const Text = styled.span<{ isDark: boolean }>`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary}; /*${({ isDark }) => (isDark ? '#fff' : '#000')};*/
  margin-left: 5px;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  > *:nth-child(2) {
    display: none;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    > *:nth-child(2) {
      display: block;
    }
  }

  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith('http')
  const innerLogo = (
    <>
      <RawLogo style={{ width: 24, height: 24 }} />
      <Text isDark={isDark}>AWSWAP</Text>
    </>
  )

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        // @ts-ignore
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  )
}

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark)
