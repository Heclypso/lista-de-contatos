import styled from 'styled-components'
import variables from '../../styles/variables'

type Props = {
  $textAlign?: boolean
  $avatarImage?: string
}

export const DetailsWrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  div:nth-child(5) {
    height: 86px;
  }
`

export const Avatar = styled.input`
  width: 120px;
  height: 120px;
  opacity: 0;
`

export const AvatarWrapper = styled.div<Props>`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border: none;
  background-image: ${({ $avatarImage }) =>
    $avatarImage
      ? `url(${$avatarImage})`
      : `url(${'https://placehold.co/120x120'})`};
  background-size: 128px 128px;
  background-position: center;
  background-repeat: no-repeat;
`

export const Name = styled.input`
  font-size: 32px;
  color: ${variables.titleColor};
  margin: 16px 0px;
  border: none;
  width: 15rem;
  text-align: center;
  background-color: transparent;
`

export const DataText = styled.input`
  font-size: 14px;
  color: ${variables.titleColor};
  border: none;
  height: 18px;
  resize: none;
  width: 100%;
`

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 24px;
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
  cursor: pointer;
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
  text-align: ${({ $textAlign }) => ($textAlign ? 'center' : '')};
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

export const Error = styled.div`
  width: 100%;
  height: 52px;
  background-color: ${variables.errorBackgroundColor};
  padding: 16px;
  text-align: center;
  color: ${variables.errorTextColor};
  font-size: 16px;
  position: absolute;
  top: 0;
  left: 0;
`
