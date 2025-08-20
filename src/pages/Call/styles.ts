import styled from 'styled-components'
import variables from '../../styles/variables'
import * as S from '../../components/Details/styles'
import { LabelBig } from '../../styles'

export const CallContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${variables.gradientColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div:nth-child(5) {
    height: 52px;
    width: 52px;
    border-radius: 26px;
  }
`

export const CallText = styled(LabelBig)`
  color: ${variables.primaryColor};

  &:nth-child(2) {
    margin-bottom: 14px;
  }
`

export const CallName = styled(S.Name)`
  color: ${variables.primaryColor};
  margin: 42px 0px 6px 0px;
`

export const CallAvatar = styled(S.AvatarWrapper)`
  margin-bottom: 64px;
`

export const CallOptionsContainer = styled(S.OptionsContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  margin-bottom: 48px;

  div {
    background-color: transparent;
  }
`

export const CallOptionText = styled(S.OptionText)`
  color: ${variables.disabledColor};
  width: 102px;
  text-align: center;
`

export const CallOptionIcon = styled(S.OptionIcon)`
  height: 40px;
  width: 40px;
`
