import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px 16px 0px 16px;
  background-color: ${variables.backgroundColor};
`

export const Title = styled.h2`
  font-size: 15px;
  color: ${variables.titleColor};
`

export const Text = styled.p`
  font-size: 13px;
  color: ${variables.textColor};
`

export const TextSmall = styled(Text)`
  font-size: 12px;
  color: ${variables.secondaryColor};
`

export const TextBig = styled(Text)`
  font-size: 14px;
  color: ${variables.secondaryColor};
`

export const Label = styled(Text)`
  font-size: 14px;
`

export const LabelBig = styled(Text)`
  font-size: 15px;
`
