import type gg from 'lib/generated';

type TAuthors = 'EpsteinD' | 'MartinG' | 'PratchettT' | 'BaxterS';
type IInitialMock = Omit<gg.Author, 'books' | 'id'>;

const initialMock: Record<TAuthors, IInitialMock> = {
  EpsteinD: {
    fullName: 'David Epstein',
    imageUrl:
      'https://res.cloudinary.com/book-hub/image/upload/v1623757100/authors/david_z3mcj0.png',
    bio: "David Epstein is the author of Range: Why Generalists Triumph in a Specialized World, and of the New York Times bestseller The Sports Gene, which has been translated in 21 languages. He has master's degrees in environmental science and journalism and has worked as an investigative reporter for ProPublica and a senior writer for Sports Illustrated. He lives in Washington, DC.",
  },
  MartinG: {
    fullName: 'George R.R. Martin',
    imageUrl:
      'https://res.cloudinary.com/book-hub/image/upload/v1623757149/authors/Portrait_photoshoot_at_Worldcon_75_2C_Helsinki_2C_before_the_Hugo_Awards__E2_80_93_George_R._R._Martin_gltjf5.jpg',
    bio: 'George Raymond Richard "R.R." Martin was born September 20, 1948, in Bayonne, New Jersey. His father was Raymond Collins Martin, a longshoreman, and his mother was Margaret Brady Martin. He has two sisters, Darleen Martin Lapinski and Janet Martin Patten.\n Martin attended Mary Jane Donohoe School and Marist High School. He began writing very young, selling monster stories to other neighborhood children for pennies, dramatic readings included. Later he became a comic book fan and collector in high school, and began to write fiction for comic fanzines (amateur fan magazines). Martin\'s first professional sale was made in 1970 at age 21: "The Hero," sold to Galaxy, published in February, 1971 issue. Other sales followed.',
  },
  PratchettT: {
    fullName: 'Terry Pratchett',
    imageUrl:
      'https://res.cloudinary.com/book-hub/image/upload/v1623757195/authors/Terry-Pratchett-2011_zbwqv8.jpg',
  },
  BaxterS: {
    fullName: 'Stephen Baxter',
    imageUrl:
      'https://res.cloudinary.com/book-hub/image/upload/v1623757228/authors/Issue01_Baxter_200x300_rxdztr.jpg',
  },
};

let count = 0;
const fillMock = (mock: IInitialMock): gg.Author => {
  count++;
  return { ...mock, books: [], id: count };
};

const authorsMock: Record<TAuthors, gg.Author> = {
  EpsteinD: fillMock(initialMock.EpsteinD),
  MartinG: fillMock(initialMock.MartinG),
  PratchettT: fillMock(initialMock.PratchettT),
  BaxterS: fillMock(initialMock.BaxterS),
};

export default authorsMock;
