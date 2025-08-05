import { useSelector } from 'react-redux'
import * as S from './styles'

import phoneIcon from '../../icons/phone_icon.svg'
import messageIcon from '../../icons/message_icon.svg'
import videoIcon from '../../icons/video_icon.svg'
import mailIcon from '../../icons/mail_icon.svg'
import addIcon from '../../icons/plus_icon.svg'

import { Label, LabelBlack, Title } from '../../styles'

import { RootReducer } from '../../store'

const Details = () => {
  const { viewContact } = useSelector((state: RootReducer) => state.contacts)

  return (
    <S.DetailsWrapper>
      <S.Avatar src={viewContact?.avatar} />
      <S.Name>{viewContact?.name}</S.Name>
      <S.OptionsContainer>
        <S.OptionWrapper>
          <S.OptionIcon src={phoneIcon} />
          <S.OptionText>Ligar</S.OptionText>
        </S.OptionWrapper>

        <S.OptionWrapper>
          <S.OptionIcon src={messageIcon} />
          <S.OptionText $textAlign={true}>Enviar mensagem</S.OptionText>
        </S.OptionWrapper>

        <S.OptionWrapper>
          <S.OptionIcon src={videoIcon} />
          <S.OptionText>Videochamada</S.OptionText>
        </S.OptionWrapper>
      </S.OptionsContainer>
      <S.DataContainer>
        <Title>Dados de contato</Title>
        <S.DataItemWrapper>
          <S.OptionIcon src={phoneIcon} />
          <S.DataTextWrapper>
            <LabelBlack>{viewContact?.number}</LabelBlack>
            <Label>Telefone</Label>
          </S.DataTextWrapper>
        </S.DataItemWrapper>
        <S.DataItemWrapper>
          <S.OptionIcon src={mailIcon} />
          <S.DataTextWrapper>
            <LabelBlack>{viewContact?.email}</LabelBlack>
            <Label>Email</Label>
          </S.DataTextWrapper>
        </S.DataItemWrapper>
      </S.DataContainer>
      <S.DataContainer>
        <Title>Apps conectados</Title>
        <S.DataItemWrapper>
          <S.OptionIcon src={addIcon} />
          <S.DataTextWrapper>
            <LabelBlack>Conecte um app</LabelBlack>
          </S.DataTextWrapper>
        </S.DataItemWrapper>
      </S.DataContainer>
    </S.DetailsWrapper>
  )
}

export default Details
