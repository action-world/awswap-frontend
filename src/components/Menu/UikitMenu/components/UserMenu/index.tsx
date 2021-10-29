import React, { useEffect, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import styled from 'styled-components'
import { Flex } from '@pancakeswap/uikit'
import { isTouchDevice } from '../../../../../utils'
import { UserMenuProps } from './types'
import { UserMenuItem } from './styles'
import Button from '../../../../styles/Button'
import Wallet from '../../icons/Wallet'

const StyledUserMenu = styled(Flex)`
  align-items: center;
  // background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 16px;
  //box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: inline-flex;
  height: 32px;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;

  &:hover {
    opacity: 0.65;
  }
`

// const LabelText = styled.div`
//   color: ${({ theme }) => theme.colors.text};
//   display: none;
//   font-weight: 600;
//
//   ${({ theme }) => theme.mediaQueries.sm} {
//     display: block;
//     margin-left: 8px;
//     margin-right: 4px;
//   }
// `

const Menu = styled.div<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.card.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 8px;
  padding-bottom: 4px;
  padding-top: 4px;
  pointer-events: auto;
  width: 280px;
  visibility: visible;
  z-index: 1001;

  ${({ isOpen }) =>
    !isOpen &&
    `
    pointer-events: none;
    visibility: hidden;
  `}

  ${UserMenuItem}:first-child {
    border-radius: 8px 8px 0 0;
  }

  ${UserMenuItem}:last-child {
    border-radius: 0 0 8px 8px;
  }
`

const UserMenu: React.FC<UserMenuProps> = ({ account, text, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null)
  const [tooltipRef, setTooltipRef] = useState<HTMLDivElement | null>(null)
  const hideTimeout = useRef<number>()
  const isHoveringOverTooltip = useRef(false)
  const accountEllipsis = account ? `${account.substring(0, 2)}...${account.substring(account.length - 4)}` : null
  const { styles, attributes } = usePopper(targetRef, tooltipRef, {
    placement: 'bottom-end',
    modifiers: [{ name: 'offset', options: { offset: [0, 12] } }],
  })

  /**
   * See "useTooltip"
   */
  useEffect(() => {
    const showTooltip = (evt: MouseEvent | TouchEvent) => {
      setIsOpen(true)

      if (evt.target === targetRef) {
        clearTimeout(hideTimeout.current)
      }

      if (evt.target === tooltipRef) {
        isHoveringOverTooltip.current = true
      }
    }

    const hideTooltip = (evt: MouseEvent | TouchEvent) => {
      if (hideTimeout.current) {
        window.clearTimeout(hideTimeout.current)
      }

      if (evt.target === tooltipRef) {
        isHoveringOverTooltip.current = false
      }

      if (!isHoveringOverTooltip.current) {
        hideTimeout.current = window.setTimeout(() => {
          if (!isHoveringOverTooltip.current) {
            setIsOpen(false)
          }
        }, 150)
      }
    }

    const toggleTouch = (evt: TouchEvent) => {
      const target = evt.target as Node
      const isTouchingTargetRef = target && targetRef?.contains(target)
      const isTouchingTooltipRef = target && tooltipRef?.contains(target)

      if (isTouchingTargetRef) {
        setIsOpen((prevOpen) => !prevOpen)
      } else if (isTouchingTooltipRef) {
        // Don't close the menu immediately so it catches the event
        setTimeout(() => {
          setIsOpen(false)
        }, 100)
      } else {
        setIsOpen(false)
      }
    }

    if (isTouchDevice()) {
      document.addEventListener('touchstart', toggleTouch)
    } else {
      targetRef?.addEventListener('mouseenter', showTooltip)
      targetRef?.addEventListener('mouseleave', hideTooltip)
      tooltipRef?.addEventListener('mouseenter', showTooltip)
      tooltipRef?.addEventListener('mouseleave', hideTooltip)
    }

    return () => {
      if (isTouchDevice()) {
        document.removeEventListener('touchstart', toggleTouch)
      } else {
        targetRef?.removeEventListener('mouseenter', showTooltip)
        targetRef?.removeEventListener('mouseleave', hideTooltip)
        tooltipRef?.removeEventListener('mouseenter', showTooltip)
        tooltipRef?.removeEventListener('mouseleave', hideTooltip)
      }
    }
  }, [targetRef, tooltipRef, hideTimeout, isHoveringOverTooltip, setIsOpen])

  return (
    <>
      <StyledUserMenu ref={setTargetRef} {...props}>
        <Button scale="sm">
          <Wallet width="16px" />
          <span style={{ marginLeft: 8 }}>{text || accountEllipsis}</span>
        </Button>
      </StyledUserMenu>
    </>
  )
}

export default UserMenu
