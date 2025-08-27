import styled from 'styled-components'
import variables from '../../styles/variables'
import { Link } from 'react-router-dom'

type NavProps = {
  $onDetails?: boolean
}

export const Nav = styled.div<NavProps>`
  width: 100%;
  height: 64px;
  background-color: ${({ $onDetails }) =>
    $onDetails ? 'transparent' : `${variables.primaryColor}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${({ $onDetails }) => ($onDetails ? '' : 'absolute')};
  top: ${({ $onDetails }) => ($onDetails ? '0' : '')};
  bottom: ${({ $onDetails }) => ($onDetails ? '' : 0)};
  left: 0;
  padding: 8px 24px;
  margin: ${({ $onDetails }) => ($onDetails ? '4px 0px 16px 0px' : '')};
`

export const IconsContainer = styled.div`
  width: 96px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const LinkOption = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  color: ${variables.titleColor};
`

export const EditIcon = styled.img`
  width: 18px;
  height: 18px;
`

export const OptionIcon = styled.img`
  width: 24px;
  height: 24px;
`

export const DeleteIcon = styled.img`
  width: 20px;
  height: 20px;
`
