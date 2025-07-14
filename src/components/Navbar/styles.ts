import styled from 'styled-components'
import variables from '../../styles/variables'

export const Nav = styled.div`
  width: 100%;
  height: 64px;
  background-color: ${variables.primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 8px 24px;
`

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const OptionIcon = styled.img`
  width: 24px;
  height: 24px;
`
