import React from 'react'
import styled from 'styled-components'
import { Text, Heading, Card, CardHeader, CardBody, Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import FoldableText from 'components/FoldableText/indexNew'
import config from './config'

const ImageWrapper = styled.div`
  flex: none;
  order: 2;
  max-width: 414px;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.md} {
    order: 1;
  }
`
const CardBodys = styled(CardBody)`
  background: '#f40';
  & > div:nth-of-type(1) div:nth-of-type(1) {
    border-radius: 12px 12px 0 0;
  }

  & > div:last-child div:nth-of-type(1) {
    border-radius: 0 0 12px 12px;
  }
`

const DetailsWrapper = styled.div`
  margin-bottom: 40px;
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ theme }) => theme.mediaQueries.md} {
    order: 2;
    margin-bottom: 0;
    // margin-left: 40px;
  }
`
const FlexOuterLayer = styled(Flex)`
  padding: 12px 12px 0 12px;
  border-radius: 8px;
  // height: 148px;
  // width: 100%;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`
const FlexLableBox = styled(Flex)`
  line-height: 24px;
  align-items: center;
  justify-content: space-between;
  max-width: 248px;
`
const DetailsLeft = styled.div`
  min-width: 300px;
  margin: 10px 12px 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const DetailsMain = styled.div`
  min-width: 300px;
  // width: 30%;
`
const DetailsRight = styled.div`
  margin: 12px;
  min-width: 300px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
  align-items: center;
  &:last-child {
    flex: none;
  }
`
const ButtonStyle = styled.div`
  border: 1px solid #261977;
  border-radius: 50px !important;
  padding: 0 10px;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #261977;
  text-align: center;
  cursor: pointer;
  margin: 0 20px 9px 0;
`
const TextLable = styled(Text)`
  // font-style: normal;
  // font-weight: normal;
  // font-size: 12px;
  // line-height: 24px;
  // margin-bottom: 3px;
  // color: #261977;

  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #261977;
`
const TextValue = styled(Text)`
  // font-style: normal;
  // font-weight: normal;
  // font-size: 12px;
  // line-height: 24px;
  // margin: 4px;
  // color: #5c5c75;

  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #5c5c75;
  margin-right: 5px;
`

const TextButtonLP = styled(Text)`
  background: #32324a;
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  padding: 0 8px;
  cursor: pointer;
  line-height: 20px;
  height: 20px;
  color: #ffffff;
`
const InputBox = styled.input`
  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #a6a6b7;
  }
  width: 200px;
  height: 38px;
  color: #a6a6b7;
  border: none;
  padding: 0 20px;
  // box-sizing: border-box;
  // border-radius: 8px;
`
const TextButtonRed = styled(Text)`
  font-family: PingFang SC;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 38px;
  color: #ffffff;
  background: #4e3cfb;
  border-radius: 8px;
  text-align: center;
  width: 249px;
  height: 38px;
  cursor: pointer;
`
const IfoQuestions = () => {
  const { t } = useTranslation()

  return (
    <Flex
      style={{ width: '100%', marginBottom: '40px' }}
      alignItems={['center', null, null, 'start']}
      flexDirection={['column', null, null, 'row']}
    >
      {/* <ImageWrapper>
        <img src="/images/ifos/ifo-bunny.png" alt="ifo bunny" width="414px" height="500px" />
      </ImageWrapper> */}
      <DetailsWrapper>
        <Flex style={{ maxWidth: '1200px', width: '100%' }}>
          {/* <CardHeader>
            <Heading scale="lg" color="secondary">
              {t('Details')}
            </Heading>
          </CardHeader> */}
          <CardBodys style={{ padding: 0, maxWidth: '1200px', width: '100%' }}>
            {config.map(({ title, caption, url, description }, i, { length }) => (
              <FoldableText
                key={title}
                id={title}
                url={url}
                mb={i + 1 === length ? '' : '10px'}
                mt={i === 0 ? '24px' : ''}
                title={t(title)}
                caption={t(caption)}
                style={{ maxWidth: '1200px', color: '#280D5F' }}
              >
                {description.map((item) => {
                  return (
                    <>
                      <FlexOuterLayer key={item.id}>
                        <DetailsLeft>
                          <Flex style={{ width: '100%', maxWidth: '248px' }}>
                            <ButtonStyle> {t('websiteButton')}</ButtonStyle>
                            <ButtonStyle> {t('seeButton')}</ButtonStyle>
                          </Flex>
                          <FlexLableBox style={{ width: '100%' }}>
                            <TextLable as="p">{t('startBlock')}</TextLable>
                            <TextValue as="p">12321.123</TextValue>
                          </FlexLableBox>
                          <FlexLableBox style={{ width: '100%' }}>
                            <TextLable as="p">{t('endBlock')}</TextLable>
                            <TextValue as="p">12321.123</TextValue>
                          </FlexLableBox>
                          <FlexLableBox style={{ width: '100%' }}>
                            <TextLable as="p">{t('estimatedEndTime')}</TextLable>
                            <TextValue as="p">11:50:25</TextValue>
                          </FlexLableBox>
                        </DetailsLeft>
                        <DetailsLeft>
                          <FlexLableBox style={{ width: '100%' }}>
                            <TextLable as="p">{t('salesVolumes')}</TextLable>
                            <TextValue as="p">1321</TextValue>
                          </FlexLableBox>
                          <FlexLableBox style={{ width: '100%' }}>
                            <TextLable as="p">{t('totalFinancing')}</TextLable>
                            <TextValue as="p">2343.23 LP</TextValue>
                          </FlexLableBox>
                          <FlexLableBox style={{ width: '100%' }}>
                            <TextLable as="p">{t('unitPrice')}</TextLable>
                            <TextValue as="p">2.12 HOS</TextValue>
                          </FlexLableBox>
                          <FlexLableBox style={{ width: '100%' }}>
                            <TextLable as="p">{t('myLPBalance')}</TextLable>
                            <Flex style={{ alignItems: 'center' }}>
                              <TextValue as="p">13.21</TextValue>
                              <TextButtonLP as="p">{t('Frame1')}</TextButtonLP>
                            </Flex>
                          </FlexLableBox>
                        </DetailsLeft>
                        <DetailsRight>
                          {i % 2 === 0 ? (
                            <FlexLableBox style={{ width: '100%', maxWidth: '248px' }}>
                              <TextLable as="p">{t('oldNumberOfParticipants')}</TextLable>
                              <TextValue as="p">0.00LP</TextValue>
                            </FlexLableBox>
                          ) : (
                            <FlexLableBox style={{ width: '100%', maxWidth: '248px' }}>
                              <TextLable as="p">{t('quantityToBeCollected')}</TextLable>
                              <TextValue as="p" style={{ fontWeight: 600 }}>
                                121.1
                              </TextValue>
                            </FlexLableBox>
                          )}
                          {i % 2 === 0 && (
                            <FlexLableBox
                              style={{
                                width: '248px',
                                position: 'relative',
                                border: '1px solid #ededf1',
                                borderRadius: '8px',
                                margin: '10px 0',
                              }}
                            >
                              <InputBox type="text" placeholder={t('numberOfParticipants')} />
                              <TextLable
                                as="p"
                                style={{
                                  fontSize: '14px',
                                  lineHeight: '20px',
                                  cursor: 'pointer',
                                  position: 'absolute',
                                  left: '200px',
                                  width: '40px',
                                  textAlign: 'center',
                                }}
                              >
                                全部
                              </TextLable>
                            </FlexLableBox>
                          )}
                          {i % 2 === 0 ? (
                            <TextButtonRed>{t('participateIn')}</TextButtonRed>
                          ) : (
                            <TextButtonRed>{t('receive')}</TextButtonRed>
                          )}
                        </DetailsRight>
                      </FlexOuterLayer>
                    </>
                  )
                })}
              </FoldableText>
            ))}
          </CardBodys>
        </Flex>
      </DetailsWrapper>
    </Flex>
  )
}

export default IfoQuestions
