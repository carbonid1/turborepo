import getTime from 'date-fns/getTime'
import type gg from 'lib/generated'
import usersMock from './users.mock'
import editionsMock from './editions.mock'

type TReviews = 'rangeEng1' | 'rangeRu1' | 'rangeRu2'
type IInitialMock = Omit<gg.Review, 'id'>
type TReviewsMock = Record<TReviews, gg.Review>

const initialMock: Record<TReviews, IInitialMock> = {
  rangeEng1: {
    lang: 'en',
    createdAt: '2021-02-11',
    updatedAt: '2021-02-11',
    creator: usersMock.john,
    edition: editionsMock.rangeEng,
    body: 'This book looks at how an emphasis on specialization can actually hamper our ability to really excel at something. It aligns with what I try to do when I am coaching, in my stories, and what we’re doing with Mamba Sports Academy—create all-around athletes who can think critically and make assessments in real time to enhance their play rather than rely only on a narrow set of skills.',
  },
  rangeRu1: {
    lang: 'ru',
    createdAt: '2021-02-24',
    updatedAt: '2021-02-24',
    creator: usersMock.ivan,
    edition: editionsMock.rangeRu,
    body: 'Отличная книжка (и не только про/для консультантов, хотя BCG & McK по разу упоминаются). Мне больше всего понравилось про "поздний старт" в новой деятельности, почему он может быть успешным и вообще про смену карьеры, и глава с развенчанием мифа про grit и persistence (не Angela Duckworth единой, в общем). Находящиеся в процессе смены вида деятельности (aka career changers) могут цитировать куски на собеседованиях, если вдруг кто усомнится в пользе их прошлого опыта ("no experience is wasted"). И родителям тоже полезно (Рихтер начал брать нормальные уроки музыки в 22 и вполне себе преуспел, можно не мучить ребенка сольфеджио и скрипкой в 8).',
  },
  rangeRu2: {
    lang: 'en',
    createdAt: '2021-03-20',
    updatedAt: '2021-03-20',
    creator: usersMock.john,
    edition: editionsMock.rangeRu,
    body: "Do I think it's a five-star book? It's very hard for me to say, as I wrote the thing. By the time I'm done working on a book, I have such a strong insider view of the project that it's difficult to be objective. I will say this: I worked extremely hard on it, and as a writer, researcher, and reader, I found it to be much more interesting than my first book. Most readers enjoyed that first book--at least according to Goodreads ratings--so I hope most readers will (as I have) enjoy this one even more.",
  },
}

let count = 0
const fillMock = (mock: IInitialMock): gg.Review => {
  count++
  return {
    ...mock,
    id: count,
    createdAt: getTime(new Date(mock.createdAt)).toString(),
  }
}

const reviewsMock: TReviewsMock = {
  rangeEng1: fillMock(initialMock.rangeEng1),
  rangeRu1: fillMock(initialMock.rangeRu1),
  rangeRu2: fillMock(initialMock.rangeRu2),
}

export default reviewsMock
