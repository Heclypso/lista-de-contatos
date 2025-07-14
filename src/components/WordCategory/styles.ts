import styled from 'styled-components'
import variables from '../../styles/variables'
import { Title } from '../../styles'

export const WordCategoryWrapper = styled.div`
  width: 100%;
  height: 16px;
  position: relative;
  margin-bottom: 10px;
`

export const WordCategoryWord = styled(Title)`
  color: ${variables.textColor};
  position: absolute;
  top: 0px;
  left: 0px;
`

export const WordCategoryLine = styled.hr`
  width: calc(100% - 19px);
  height: 1px;
  color ${variables.lineColor};
  position: absolute;
  top: 8px;
  left: 19px;
`
