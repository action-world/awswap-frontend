import React, { useState } from 'react'
import styled from 'styled-components'
import { ExpandableLabel, Flex, FlexProps, Text, Image } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

interface FoldableTextProps extends FlexProps {
  title?: string
  caption?: string
  url?: string
}

const Wrapper = styled(Flex)`
  max-width: 1200px;
`
const StyledImage = styled(Image)`
  margin-left: 15px;
`
const StyledExpandableLabelWrapper = styled(Flex)`
  button {
    align-items: center;
    justify-content: flex-start;
  }
`
const FlexBox = styled(Flex)`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`
const FlexTitle = styled(Flex)`
  background: #ffffff;
  box-shadow: 0px 2px 6px rgba(99, 61, 61, 0.1);
  cursor: pointer;
  padding-top: 16px;
`
const Text1 = styled(Text)`
  margin-left: 20px;
  font-size: 18px;
  line-height: 24px;
  color: #280d5f;
`

const Text2 = styled(Text)`
  margin-left: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  color: rgb(166, 166, 183);
`

const StyledChildrenFlex = styled(Flex)<{ isExpanded?: boolean }>`
  overflow: hidden;
  height: ${({ isExpanded }) => (isExpanded ? '' : '0px')};
  padding-bottom: ${({ isExpanded }) => (isExpanded ? '16px' : '0px')};
  // border-bottom: 1px solid ${({ theme }) => theme.colors.inputSecondary};
  background: #f5f8fd;
  border-radius: 0 0 8px 8px;
  width: 100%;
  max-width: 1200px;
`

const FoldableText: React.FC<FoldableTextProps> = ({ title, caption, url, children, ...props }) => {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Wrapper {...props} flexDirection="column" onClick={() => setIsExpanded(!isExpanded)}>
      <FlexTitle alignItems="center" pb="16px">
        <FlexBox>
          <StyledImage src={url} alt="" width={16} height={16} />
          <Text1 fontWeight="bold">{title}</Text1>
          <Text2 fontWeight="bold">{caption}</Text2>
        </FlexBox>
        <StyledExpandableLabelWrapper>
          <ExpandableLabel expanded={isExpanded} onClick={() => setIsExpanded(!isExpanded)} />
        </StyledExpandableLabelWrapper>
      </FlexTitle>
      <StyledChildrenFlex
        isExpanded={isExpanded}
        flexDirection="column"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {children}
      </StyledChildrenFlex>
    </Wrapper>
  )
}

export default FoldableText
