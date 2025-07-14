import { Option } from '../../styles'
import { Nav, OptionIcon, OptionWrapper } from './styles'

import favoriteIcon from '../../icons/favorite_icon.svg'
import recentIcon from '../../icons/clock_icon.svg'
import contactsIcon from '../../icons/user_icon.svg'

const Navbar = () => {
  return (
    <Nav>
      <OptionWrapper>
        <OptionIcon
          src={favoriteIcon}
          alt="Ícone da aba de contatos favoritos"
        />
        <Option>Favoritos</Option>
      </OptionWrapper>

      <OptionWrapper>
        <OptionIcon src={recentIcon} alt="Ícone da aba de contatos recentes" />
        <Option>Recentes</Option>
      </OptionWrapper>

      <OptionWrapper>
        <OptionIcon src={contactsIcon} alt="Ícone da aba de contatos" />
        <Option>Contatos</Option>
      </OptionWrapper>
    </Nav>
  )
}

export default Navbar
