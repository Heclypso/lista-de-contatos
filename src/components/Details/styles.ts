import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  textAlign?: boolean
}

export const DetailsWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div:nth-child(5) {
    height: 86px;
  }
`

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`

export const Name = styled.h1`
  font-size: 32px;
  color: ${variables.titleColor};
  margin: 16px 0px;
`

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`

export const OptionWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background-color: ${variables.primaryColor};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 52px;
`

export const OptionIcon = styled.img`
  width: 20px;
  height: 20px;
`
export const OptionText = styled.h2<Props>`
  font-size: 12px;
  color: ${variables.secondaryColor};
  position: absolute;
  bottom: -40px;
  text-align: ${({ textAlign }) => (textAlign ? 'center' : '')};
  height: 32px;
`

export const DataContainer = styled.div<Props>`
  width: calc(100% - 32px);
  height: 153px;
  background-color: ${variables.primaryColor};
  border-radius: 10px;
  margin-bottom: 16px;
  padding: 12px;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));

  h2 {
    margin-bottom: 24px;
  }

  div:nth-of-type(2) {
    margin-top: 16px;
  }
`

export const DataItemWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const DataTextWrapper = styled.div`
  margin-left: 16px;
`
