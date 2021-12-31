import type { GetServerSideProps, NextPage } from 'next'
import NextImage from 'next/image'
import NextLink from 'next/link'
import slugify from 'slugify'
import { ROUTE } from 'lib/consts/routes'
import { ServerError } from 'lib/components/@errors/ServerError'
import { initializeApollo } from 'lib/apollo'
import gg from 'lib/generated'

const HomePage: NextPage = () => {
  const { data, error } = gg.useIndexPageBooks()
  const { books = [] } = data ?? {}

  if (error) return <ServerError />

  return (
    <div
      className="grid justify-center gap-6 pt-4"
      style={{ gridTemplateColumns: 'repeat(auto-fit, 160px)' }}
    >
      {books.map(({ id, editions }, index) => (
        <NextLink
          key={id + index}
          href={`/${ROUTE.book}/${editions[0].id}.${slugify(editions[0].title, {
            lower: false,
          })}`}
        >
          <a className="cursor-pointer rounded transition duration-500 hover:shadow-xl transform hover:scale-[1.05] h-[240px]">
            <NextImage
              width="160px"
              height="240px"
              className="rounded"
              alt={editions[0].title}
              src={editions[0].cover || ''}
            />
          </a>
        </NextLink>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()
  await apolloClient.query({ query: gg.IndexPageBooksDocument })
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default HomePage
