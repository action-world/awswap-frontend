import styled from 'styled-components'

export const ActionContainer = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 0;
    max-height: 115px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    margin-left: 48px;
    margin-right: 0;
    margin-bottom: 0;
    max-height: 115px;
    align-self: flex-end;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    margin-left: 96px;
  }
`

export const ActionTitles = styled.div`
  display: flex;
  .cake {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #261977;
  }
  .earned {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #5c5c75;
    margin-right: 5px;
  }
  .enable-farm {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #261977;
  }
`

export const ActionContent = styled.div`
  display: flex;
  flex-direction: column;
  .val {
    color: #5c5c75;
    font-family: DINPro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    width: 249px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #ededf1;
    padding-left: 10px;
    border-radius: 8px;
    margin-top: 10px;
  }
  .btn-get {
    margin-top: 8px;
    width: 249px;
    background: #32324a;
    border-radius: 8px;
    height: 38px;
  }
  .btn-start {
    margin-top: 12px;
    width: 249px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    background: #c1272d;
    border-radius: 8px;
    font-family: PingFang SC;
    font-style: normal;
    font-weight: normal;
    color: #fff;
    border-color: transparent;
  }
  .btn-connect {
    margin-top: 18px;
    width: 249px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    background: #c1272d;
    color: #fff;
  }
`
