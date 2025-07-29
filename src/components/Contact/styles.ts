import styled from 'styled-components'
import { Text } from '../../styles'
import variables from '../../styles/variables'

type Props = {
  isFirst?: boolean
  isLast?: boolean
  borderVisible?: boolean
  infoExpanded?: boolean
}

export const ContactContainer = styled.div<Props>`
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
  margin: ${({ isLast }) => (isLast ? '0px 0px 16px 0px' : '')};
`

export const ContactWrapper = styled.div<Props>`
  width: 100%;
  height: 60px;
  background-color: ${variables.primaryColor};
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;

  border-radius: ${({ isFirst, isLast, infoExpanded }) =>
    !infoExpanded
      ? isFirst && isLast
        ? '5px 5px 5px 5px'
        : isFirst
          ? '5px 5px 0px 0px'
          : isLast
            ? '0px 0px 5px 5px'
            : ''
      : ''};
  border-bottom: ${({ isFirst, isLast, borderVisible }) =>
    borderVisible
      ? isFirst && isLast
        ? ''
        : isFirst
          ? `1px solid ${variables.lineColor}`
          : isLast
            ? ''
            : `1px solid ${variables.lineColor}`
      : ''};
`

export const ContactExpanded = styled.div<Props>`
  height: 102px;
  background-color: ${variables.primaryColor};
  margin-bottom: 16px;
  padding: 8px 12px 12px 12px;
  margin-top: ${({ borderVisible }) => (borderVisible ? '' : '-1px')};
`

export const ContactInfosWrapper = styled.div`
  color: ${variables.textColor};
  margin-bottom: 6px;
  display: flex;
  width: 60%;

  p:nth-child(2) {
    margin-left: auto;
  }
`

export const ContactInfos = styled(Text)`
  font-size: 15px;
`

export const ContactButtonsWrapper = styled.div`
  display: flex;
  border-top: 1px solid ${variables.lineColor};
  margin-top: 15px;
`

export const ContactButton = styled.button`
  height: 28px;
  width: 100%;
  background-color: ${variables.primaryColor};
  color: ${variables.textColor};
  border: none;

  &:hover {
    background-color: ${variables.buttonHoverColor};
  }
`

export const TextContainer = styled.div`
  margin-left: 8px;
`

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
