import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from '@pancakeswap/uikit'
import Container from 'components/Layout/Container'
import { useTranslation } from 'contexts/Localization'

// const getGradient = (isDark: boolean) => {
//   if (isDark) {
//     return '/images/banner.png'
//   }
//   return '/images/squares.svg'
// }

// background: url(${({ theme }) => getGradient(theme.isDark)}) no-repeat;
// background-size: 100% auto;
// background-position: 20px;
// padding-bottom: 40px;
// padding-top: 40px;

const StyledHero = styled.div`
  // background: linear-gradient(256.48deg, #f8dc6c -1.81%, #fe7061 25.18%, #e13c78 58.54%, #d13030 102.57%);
  background: linear-gradient(256.48deg, #9443e5 -1.81%, #793ef6 32.29%, #5a40ee 64.06%, #5f42e9 102.57%);
  padding: 10px;
  border-radius: 10px;
  max-width: 1200px;
  margin: 0 auto;
`
const HeroNew = (props) => {
  const { t } = useTranslation()
  const { title, caption } = props
  return (
    <Box mb="32px" mt="32px" padding="24px">
      <StyledHero>
        <Container>
          <Heading as="h2" scale="lg" mb="10px" mt="10px" color="#fff" bold={false} fontWeight="400">
            {t(title)}
          </Heading>
          <Text bold fontSize="16px" color="#fff" mb="10px" fontWeight="400">
            {t(caption)}
          </Text>
        </Container>
      </StyledHero>
    </Box>
  )
}

export default HeroNew
