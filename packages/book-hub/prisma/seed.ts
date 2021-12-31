import { PrismaClient } from '@prisma/client';
import fromUnixTime from 'date-fns/fromUnixTime';
import mocks from '../lib/mocks';

const prisma = new PrismaClient();

const getDate = (timestamp: string | undefined | null): Date | undefined =>
  timestamp ? fromUnixTime(+timestamp / 1000) : undefined;

async function main() {
  const users = Object.values(mocks.users);
  for (const user of users) {
    await prisma.user.create({
      data: {
        id: user.id,
        email: user.email,
        image: user.image,
        name: user.name,
      },
    });
  }

  const authors = Object.values(mocks.authors);
  for (const author of authors) {
    await prisma.author.create({
      data: {
        id: author.id,
        bio: author.bio,
        fullName: author.fullName,
        imageUrl: author.imageUrl,
      },
    });
  }

  const books = Object.values(mocks.books);
  for (const book of books) {
    await prisma.book.create({
      data: {
        publishedIn: getDate(book.publishedIn),
        authors: {
          connect: book.authors.map(({ id }) => ({ id })),
        },
      },
    });
  }

  const editions = Object.values(mocks.editions);
  for (const edition of editions) {
    await prisma.edition.create({
      data: {
        lang: edition.lang,
        title: edition.title,
        cover: edition.cover,
        description: edition.description,
        publishedIn: getDate(edition.publishedIn),
        book: { connect: { id: edition.book.id } },
      },
    });
  }

  const reviews = Object.values(mocks.reviews);
  for (const review of reviews) {
    await prisma.review.create({
      data: {
        body: review.body,
        createdAt: getDate(review.createdAt),
        edition: { connect: { id: review.edition.id } },
        creator: { connect: { id: review.creator.id } },
      },
    });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
