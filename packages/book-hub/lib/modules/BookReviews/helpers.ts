import type gg from 'lib/generated'
import type { LangOptions } from './interface'

type IReview = Pick<gg.Review, 'lang'>

export const makeLangOptions = (reviews: IReview[] = []): LangOptions => {
  return reviews.reduce((acc: LangOptions, { lang }) => {
    if (!lang) return acc
    const index = acc.findIndex(opt => opt.lang === lang)

    if (index >= 0) {
      acc[index] = { lang, count: acc[index].count + 1 }
      return acc
    } else return [...acc, { lang, count: 1 }]
  }, [])
}
