import styled from 'styled-components'
import { Text, Title } from '../../styles'
import variables from '../../styles/variables'

type WrapperProps = {
  isFirst?: boolean
  isLast?: boolean
}

export const ContactWrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 60px;
  background-color: ${variables.primaryColor};
  display: flex;
  align-items: center;
  padding: 10px;
  position: relative;

  border-radius: ${({ isFirst, isLast }) =>
    isFirst && isLast
      ? '5px 5px 5px 5px'
      : isFirst
        ? '5px 5px 0px 0px'
        : isLast
          ? '0px 0px 5px 5px'
          : ''};
  border-bottom: ${({ isFirst, isLast }) =>
    isFirst && isLast
      ? ''
      : isFirst
        ? `1px solid ${variables.lineColor}`
        : isLast
          ? ''
          : `1px solid ${variables.lineColor}`};
  margin: ${({ isLast }) => (isLast ? '0px 0px 16px 0px' : '')};
`

export const TextContainer = styled.div`
  height: 34px;
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
