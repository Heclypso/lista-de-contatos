import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import variables from './variables'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    body {
      height: 100vh;

      @media (min-width: 1023px) {
        padding: 0 36vw;
      }
    }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px 16px 0px 16px;
  background-color: ${variables.backgroundColor};
  margin: 0;
  position: relative;

  @media (min-width: 1023px) {
    width: 100%;
  }
`

export const ContainerDetails = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px 0px 0px 0px;
  background-color: ${variables.backgroundColor};
`

export const ContainerList = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 4rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Title = styled.h2`
  font-size: 15px;
  color: ${variables.titleColor};
  font-weight: 400;
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

export const LabelBlack = styled(Label)`
  color: ${variables.secondaryColor};
`

export const LabelBig = styled(Text)`
  font-size: 15px;
`
