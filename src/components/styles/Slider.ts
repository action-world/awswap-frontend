import styled from 'styled-components'
import { Slider as RawSlider } from '@pancakeswap/uikit'

export const SliderWrapper = styled.div.attrs({
  className: 'slider-wrapper',
})`
  color: red;
`

const getThumbStyle = () => `
  background-image: none;
  background-color: #b12732;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  box-shadow: 0px 0px 13px #b02532;
  margin-top: 8px;
  
  &:hover {
    transform: translate(-2px,-2px);
  }
`

export default styled(RawSlider)`
  > div:nth-child(1) {
    background-image: none;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 15px;
    left: 9px;
    box-shadow: 0 0 13px ${({ theme }) => theme.colors.primary};
    z-index: 1;
  }

  > div:nth-child(2) {
    > div:nth-child(1) {
      height: 3px;
    }

    > div:nth-child(2) {
      height: 5px;
      left: 4px;
    }

    input {
      ::-webkit-slider-thumb {
        ${getThumbStyle}
      }

      ::-moz-range-thumb {
        ${getThumbStyle}
      }

      ::-ms-thumb {
        ${getThumbStyle}
      }
    }
  }
`
