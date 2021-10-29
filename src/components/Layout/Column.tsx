import styled from 'styled-components'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const ColumnCenter = styled(Column)`
  width: 100%;
  align-items: center;
  position: relative;

  &.icon:after {
    position: absolute;
    content: '';
    display: block;
    height: 1px;
    background-color: #ededf1;
    left: 16px;
    right: 16px;
    z-index: 0;
    bottom: 20px;
  }

  > svg {
    z-index: 1;
  }
`

export const AutoColumn = styled.div<{
  gap?: 'sm' | 'md' | 'lg' | string
  justify?: 'stretch' | 'center' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'space-between'
}>`
  display: grid;
  grid-auto-rows: auto;
  grid-row-gap: ${({ gap }) => (gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap};
  justify-items: ${({ justify }) => justify && justify};

  > div {
    border-radius: 8px;
  }
`

export default Column
