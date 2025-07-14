import styled from 'styled-components'
import { Text, Title } from '../../styles'
import variables from '../../styles/variables'

export const ContactWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${variables.primaryColor};
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 1px solid ${variables.lineColor};
`

export const TextContainer = styled.div`
  height: 34px;
  margin-left: 8px;
`

export const ContactTitle = styled(Title)``

export const Label = styled(Text)``

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`

export const CallIcon = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 20px;
  right: 20px;
`
