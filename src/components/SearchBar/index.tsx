import { useDispatch } from 'react-redux'

import searchIcon from '../../icons/search_icon.svg'

import { setSearchValue } from '../../store/reducers/contacts'

import * as S from './styles'

const SearchBar = () => {
  const dispatch = useDispatch()

  return (
    <S.SearchWrapper>
      <S.SearchIcon src={searchIcon} alt="ícone da barra de pesquisa" />
      <S.Search
        onChange={(e) => {
          const eValue = e.target.value.toLocaleLowerCase()
          dispatch(setSearchValue(eValue))
        }}
        name="search-bar"
        id="search-bar"
        placeholder="Pesquisar contatos"
      />
    </S.SearchWrapper>
  )
}

export default SearchBar
