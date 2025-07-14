import { Search, SearchIcon, SearchWrapper } from './styles'
import searchIcon from '../../icons/search_icon.svg'

const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchIcon src={searchIcon} alt="ícone da barra de pesquisa" />
      <Search
        name="search-bar"
        id="search-bar"
        placeholder="Pesquisar contatos"
      />
    </SearchWrapper>
  )
}

export default SearchBar
