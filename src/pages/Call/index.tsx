import * as S from '../../components/Details/styles'
import Navbar from '../../components/Navbar'
import { CallContainer } from './styles'

const Call = () => {
  return (
    <CallContainer>
      <Navbar onDetails={false} />
      <S.DetailsWrapper>
        <S.AvatarWrapper></S.AvatarWrapper>
        <S.Name value={'Placeholder'} />
        <S.OptionsContainer>
          <S.OptionWrapper>
            <S.OptionIcon />
            <S.OptionText>Placeholder</S.OptionText>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon />
            <S.OptionText $textAlign={true}>Placeholder composto</S.OptionText>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon />
            <S.OptionText>Placeholder</S.OptionText>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon />
            <S.OptionText>Placeholder</S.OptionText>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon />
            <S.OptionText>Placeholder</S.OptionText>
          </S.OptionWrapper>

          <S.OptionWrapper>
            <S.OptionIcon />
            <S.OptionText>Placeholder</S.OptionText>
          </S.OptionWrapper>
        </S.OptionsContainer>
        <S.OptionWrapper>
          <S.OptionIcon />
        </S.OptionWrapper>
      </S.DetailsWrapper>
    </CallContainer>
  )
}

export default Call
