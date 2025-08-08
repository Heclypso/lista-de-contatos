import styled from 'styled-components'
import variables from '../../styles/variables'

export const CreateNewContactWrapper = styled.div`
  width: 100%;
  height: 24px;
  position: relative;
  margin-top: 28px;
  margin-bottom: 24px;
  cursor: pointer;
`

export const CreateNewContactButton = styled.button`
  width: 132px;
  height: 18px;
  background-color: transparent;
  border: none;
  font-size: 15px;
  color: ${variables.titleColor};
  position: absolute;
  top: 3px;
  left: 48px;
  cursor: pointer;
`

export const CreateNewContactIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  left: 12px;
`
