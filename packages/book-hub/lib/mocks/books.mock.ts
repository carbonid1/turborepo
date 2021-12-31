import getTime from 'date-fns/getTime'
import type gg from 'lib/generated'
import authorsMock from './authors.mock'

type TBook = 'range' | 'goT' | 'LongMars' | 'ArabianN'
type TBooksMock = Record<TBook, gg.Book>

const booksMock: TBooksMock = {
  range: {
    id: 1,
    publishedIn: getTime(new Date('2019-05-28')).toString(),
    authors: [authorsMock.EpsteinD],
    editions: [],
  },
  goT: {
    id: 2,
    publishedIn: getTime(new Date('1996-08-06')).toString(),
    authors: [authorsMock.MartinG],
    editions: [],
  },
  LongMars: {
    id: 3,
    publishedIn: getTime(new Date('2014-06-19')).toString(),
    authors: [authorsMock.PratchettT, authorsMock.BaxterS],
    editions: [],
  },
  ArabianN: {
    id: 4,
    publishedIn: getTime(new Date('800')).toString(),
    authors: [],
    editions: [],
  },
}

export default booksMock
