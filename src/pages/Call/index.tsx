import { useSelector } from 'react-redux'

import * as S from '../../components/Details/styles'

import {
  CallAvatar,
  CallContainer,
  CallName,
  CallOptionIcon,
  CallOptionsContainer,
  CallOptionText,
  CallText
} from './styles'
import { RootReducer } from '../../store'

import callPlusIcon from '../../icons/call_plus_icon.svg'
import pauseIcon from '../../icons/pause_icon.svg'
import bluetoothIcon from '../../icons/bluetooth_icon.svg'
import speakerIcon from '../../icons/speaker_icon.svg'
import microphoneIcon from '../../icons/microphone_icon.svg'
import keyboardIcon from '../../icons/keyboard_icon.svg'

import turnOffCall from '../../icons/turn_off_icon.svg'
import { useNavigate } from 'react-router-dom'

const Call = () => {
  const currentContact = useSelector(
    (state: RootReducer) => state.contacts.viewContact
  )

  const navigate = useNavigate()
  return (
    <CallContainer>
      <CallText>Chamando...</CallText>
      <S.DetailsWrapper>
        <CallName value={currentContact?.name} />
        <CallText>Telefone {currentContact?.number}</CallText>
        <CallAvatar $avatarImage={currentContact?.avatar}></CallAvatar>
        <CallOptionsContainer>
          <S.OptionWrapper>
            <S.OptionIcon src={callPlusIcon} />
            <CallOptionText>Adicionar chamada</CallOptionText>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon src={pauseIcon} />
            <CallOptionText>Colocar chamada em espera</CallOptionText>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon src={bluetoothIcon} />
            <CallOptionText>Bluetooth</CallOptionText>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon src={speakerIcon} />
            <CallOptionText>Viva-voz</CallOptionText>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon src={microphoneIcon} />
            <CallOptionText>Silenciar</CallOptionText>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon src={keyboardIcon} />
            <CallOptionText>Teclado</CallOptionText>
          </S.OptionWrapper>
        </CallOptionsContainer>
        <S.OptionWrapper>
          <CallOptionIcon onClick={() => navigate('/')} src={turnOffCall} />
        </S.OptionWrapper>
      </S.DetailsWrapper>
    </CallContainer>
  )
}

export default Call
