import * as S from './styles'

const avatarPlaceholder = 'https://placehold.co/120x120'

import phoneIcon from '../../icons/phone_icon.svg'
import messageIcon from '../../icons/message_icon.svg'
import videoIcon from '../../icons/video_icon.svg'
import mailIcon from '../../icons/mail_icon.svg'
import addIcon from '../../icons/plus_icon.svg'

import { Label, LabelBlack, Title } from '../../styles'

const Details = () => {
  return (
    <S.DetailsWrapper>
      <S.Avatar src={avatarPlaceholder} />
      <S.Name>Placeholder</S.Name>
      <S.OptionsContainer>
        <S.OptionWrapper>
          <S.OptionIcon src={phoneIcon} />
          <S.OptionText>Ligar</S.OptionText>
        </S.OptionWrapper>

        <S.OptionWrapper>
          <S.OptionIcon src={messageIcon} />
          <S.OptionText textAlign={true}>Enviar mensagem</S.OptionText>
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
            <LabelBlack>12 345678910</LabelBlack>
            <Label>Telefone</Label>
          </S.DataTextWrapper>
        </S.DataItemWrapper>
        <S.DataItemWrapper>
          <S.OptionIcon src={mailIcon} />
          <S.DataTextWrapper>
            <LabelBlack>Placeholder@gmail.com</LabelBlack>
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
