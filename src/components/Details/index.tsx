import {
  Avatar,
  DetailsWrapper,
  Name,
  OptionsContainer,
  OptionWrapper,
  OptionIcon,
  OptionText,
  DataContainer,
  DataItemWrapper,
  DataTextWrapper
} from './styles'

const avatarPlaceholder = 'https://placehold.co/120x120'

import phoneIcon from '../../icons/phone_icon.svg'
import messageIcon from '../../icons/message_icon.svg'
import videoIcon from '../../icons/video_icon.svg'
import mailIcon from '../../icons/mail_icon.svg'
import addIcon from '../../icons/plus_icon.svg'

import { Label, LabelBlack, Title } from '../../styles'

const Details = () => {
  return (
    <DetailsWrapper>
      <Avatar src={avatarPlaceholder} />
      <Name>Placeholder</Name>
      <OptionsContainer>
        <OptionWrapper>
          <OptionIcon src={phoneIcon} />
          <OptionText>Ligar</OptionText>
        </OptionWrapper>

        <OptionWrapper>
          <OptionIcon src={messageIcon} />
          <OptionText textAlign={true}>Enviar mensagem</OptionText>
        </OptionWrapper>

        <OptionWrapper>
          <OptionIcon src={videoIcon} />
          <OptionText>Videochamada</OptionText>
        </OptionWrapper>
      </OptionsContainer>
      <DataContainer>
        <Title>Dados de contato</Title>
        <DataItemWrapper>
          <OptionIcon src={phoneIcon} />
          <DataTextWrapper>
            <LabelBlack>12 345678910</LabelBlack>
            <Label>Telefone</Label>
          </DataTextWrapper>
        </DataItemWrapper>
        <DataItemWrapper>
          <OptionIcon src={mailIcon} />
          <DataTextWrapper>
            <LabelBlack>Placeholder@gmail.com</LabelBlack>
            <Label>Email</Label>
          </DataTextWrapper>
        </DataItemWrapper>
      </DataContainer>
      <DataContainer>
        <Title>Apps conectados</Title>
        <DataItemWrapper>
          <OptionIcon src={addIcon} />
          <DataTextWrapper>
            <LabelBlack>Conecte um app</LabelBlack>
          </DataTextWrapper>
        </DataItemWrapper>
      </DataContainer>
    </DetailsWrapper>
  )
}

export default Details
