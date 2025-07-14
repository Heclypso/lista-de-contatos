import styled from 'styled-components'
import variables from '../../styles/variables'

export const Search = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 32px;
  font-size: 15px;
  color: ${variables.titleColor};
  padding: 20px 20px 20px 60px;
  border: none;
  margin-bottom: 28px;

  &::placeholder {
    font-size: 15px;
    color: ${variables.titleColor};
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  height: 64px;
`

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 20px;
  left: 20px;
`
