import {
  WordCategoryLine,
  WordCategoryWord,
  WordCategoryWrapper
} from './styles'

type Props = {
  wordCategory: string
}

const WordCategory = ({ wordCategory }: Props) => {
  return (
    <WordCategoryWrapper>
      <WordCategoryWord>{wordCategory}</WordCategoryWord>
      <WordCategoryLine />
    </WordCategoryWrapper>
  )
}

export default WordCategory
