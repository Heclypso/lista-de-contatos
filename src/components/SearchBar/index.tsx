import { useDispatch } from 'react-redux'

import { Search, SearchIcon, SearchWrapper } from './styles'
import searchIcon from '../../icons/search_icon.svg'
import { setSearchValue } from '../../store/reducers/contacts'

const SearchBar = () => {
  const dispatch = useDispatch()

  return (
    <SearchWrapper>
      <SearchIcon src={searchIcon} alt="ícone da barra de pesquisa" />
      <Search
        onChange={(e) => {
          const eValue = e.target.value.toLocaleLowerCase()
          dispatch(setSearchValue(eValue))
        }}
        name="search-bar"
        id="search-bar"
        placeholder="Pesquisar contatos"
      />
    </SearchWrapper>
  )
}

export default SearchBar
