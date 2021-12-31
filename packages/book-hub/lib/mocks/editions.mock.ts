import getTime from 'date-fns/getTime';
import type gg from 'lib/generated';
import booksMock from './books.mock';

type TEditions = 'rangeEng' | 'rangeRu' | 'goT' | 'LongMars' | 'ArabianN';
type TEditionsMock = Record<TEditions, gg.Edition>;

const editionsMock: TEditionsMock = {
  rangeEng: {
    id: 1,
    publishedIn: getTime(new Date('2019-05-28')).toString(),
    description:
      "What's the most effective path to success in any domain? It's not what you think. Plenty of experts argue that anyone who wants to develop a skill, play an instrument, or lead their field should start early, focus intensely, and rack up as many hours of deliberate practice as possible. If you dabble or delay, you'll never catch up to the people who got a head start. But a closer look at research on the world's top performers, from professional athletes to Nobel laureates, shows that early specialization is the exception, not the rule. David Epstein examined the world's most successful athletes, artists, musicians, inventors, forecasters and scientists. He discovered that in most fields--especially those that are complex and unpredictable--generalists, not specialists, are primed to excel. Generalists often find their path late, and they juggle many interests rather than focusing on one. They're also more creative, more agile, and able to make connections their more specialized peers can't see. Provocative, rigorous, and engrossing, Range makes a compelling case for actively cultivating inefficiency. Failing a test is the best way to learn. Frequent quitters end up with the most fulfilling careers. The most impactful inventors cross domains rather than deepening their knowledge in a single area. As experts silo themselves further while computers master more of the skills once reserved for highly focused humans, people who think broadly and embrace diverse experiences and perspectives will increasingly thrive.",
    lang: 'en',
    title: 'Range: Why Generalists Triumph in a Specialized World',
    cover:
      'https://res.cloudinary.com/book-hub/image/upload/v1621965132/covers/sm/range_fy4vdv.jpg',
    book: booksMock.range,
    reviews: [],
  },
  rangeRu: {
    id: 2,
    publishedIn: getTime(new Date('2020-11-18')).toString(),
    description:
      'Эта книга перевернет ваши представления о пути к профессиональному успеху! Революционный подход Дэвида Эпштейна, магистра экологических наук и журналистики, ставит под сомнение идею 10 000 часов. Он исследовал примеры самых успешных спортсменов, художников, музыкантов, нобелевских лауреатов и ученых и обнаружил, что в большинстве областей ранняя и узкая специализация – не синоним результата. Именно универсалы — изобретательные и гибкие люди с широким кругозором и большим жизненным опытом — рулят в мире больших скоростей.',
    lang: 'ru',
    title: 'Универсалы. Как талантливые дилетанты становятся победителями по жизни',
    cover:
      'https://res.cloudinary.com/book-hub/image/upload/v1621965192/covers/sm/range_f2gjvq.jpg',
    book: booksMock.range,
    reviews: [],
  },
  goT: {
    id: 3,
    publishedIn: getTime(new Date('2005-08')).toString(),
    lang: 'en',
    description: `Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister and supernatural forces are massing beyond the kingdom’s protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens.
    Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; and a determined woman undertakes the most treacherous of journeys. Amid plots and counterplots, tragedy and betrayal, victory and terror, the fate of the Starks, their allies, and their enemies hangs perilously in the balance, as each endeavors to win that deadliest of conflicts: the game of thrones.`,
    title: 'A Game of Thrones',
    cover:
      'https://res.cloudinary.com/book-hub/image/upload/v1621965264/covers/sm/13496_lmqry2.jpg',
    book: booksMock.goT,
    reviews: [],
  },
  LongMars: {
    id: 4,
    lang: 'en',
    description:
      "2040-2045: In the years after the cataclysmic Yellowstone eruption there is massive economic dislocation as populations flee Datum Earth to myriad Long Earth worlds. Sally, Joshua, and Lobsang are all involved in this perilous work when, out of the blue, Sally is contacted by her long-vanished father and inventor of the original Stepper device, Willis Linsay. He tells her he is planning a fantastic voyage across the Long Mars and wants her to accompany him. But Sally soon learns that Willis has an ulterior motive for his request: he needs her help to trace an advanced alien technology which, he believes, will help mankind’'s post-Yellowstone recovery. Meanwhile U. S. Navy Commander Maggie Kauffman has embarked on an incredible journey of her own, leading an expedition to the outer limits of the far Long Earth. For Joshua, the crisis he faces is much closer to home. He becomes embroiled in the plight of the Next: the super-bright post-humans who are beginning to emerge from their 'long childhood' in the community called Happy Landings, located deep in the Long Earth. Ignorance and fear have caused 'normal' human society to turn against the Next, and the authorities, afraid of anything or anyone not deemed 'normal', order that all Next children be imprisoned. Joshua is determined to liberate the children -- and a dramatic showdown over the inhumanity of humans against their own kind seems inevitable.",
    publishedIn: getTime(new Date('2014-06-19')).toString(),
    title: 'The Long Mars',
    cover:
      'https://res.cloudinary.com/book-hub/image/upload/v1621965325/covers/sm/18586487_gk7e1k.jpg',
    book: booksMock.LongMars,
    reviews: [],
  },
  ArabianN: {
    id: 5,
    lang: 'en',
    description:
      'The vengeful King Schahriar agrees to stave off the execution of Queen Scheherazade until she finishes a particularly compelling story. Her plan? Bleed one tale into another. Through fanciful histories, romances, tragedies, comedies, poems, riddles, and songs, Scheherazade prolongs her life by holding the king’s rapt attention. With origins in Persian and Eastern Indian folklore, the stories of The Arabian Nights have been reworked, reshaped, revised, collected, and supplemented throughout the centuries by various authors and scholars - and are continually redefined by the modern translations of the Western world.',
    publishedIn: getTime(new Date('2004-06')).toString(),
    title: 'The Arabian Nights',
    cover:
      'https://res.cloudinary.com/book-hub/image/upload/v1621965401/covers/sm/93101._SY475__adpv95.jpg',
    book: booksMock.ArabianN,
    reviews: [],
  },
};

export default editionsMock;
