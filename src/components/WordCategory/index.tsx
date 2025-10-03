import * as S from './styles'

type Props = {
  wordCategory: string
}

const WordCategory = ({ wordCategory }: Props) => {
  return (
    <S.WordCategoryWrapper>
      <S.WordCategoryWord>{wordCategory}</S.WordCategoryWord>
      <S.WordCategoryLine />
    </S.WordCategoryWrapper>
  )
}

export default WordCategory
