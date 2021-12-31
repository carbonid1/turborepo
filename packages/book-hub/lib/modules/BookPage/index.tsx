import type { GetServerSideProps, NextPage } from 'next'
import { CustomHead } from 'lib/components/CustomHead'
import { ROUTE } from 'lib/consts/routes'
import { TextLink } from 'lib/components'
import { BookReviews } from 'lib/modules/BookReviews'
import { Edition } from 'lib/modules/Edition'
import { extractIdFromSlug } from 'lib/utils'
import { initializeApollo } from 'lib/apollo'
import gg from 'lib/generated'
import { ServerError } from 'lib/components/@errors/ServerError'
import { NotFound } from 'lib/components/@errors/NotFound'

interface IBookPage {
  id: string
}

const BookPage: NextPage<IBookPage> = ({ id }) => {
  const { data, error } = gg.useBookPageEdition({ variables: { id } })
  const { edition } = data ?? {}

  if (error) return <ServerError />
  if (!edition) return <NotFound />

  const { book } = edition

  return (
    <>
      <CustomHead title={edition.title} description={edition.description} />
      <div>
        <Edition edition={edition} className="mb-2" />
        <TextLink path={`/${ROUTE.editions}/${book.id}`} slug={edition.title}>
          All Editions
        </TextLink>
        <BookReviews bookId={book.id} editionId={Number(id)} />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const slug = ctx.query.slug as string
  const id = extractIdFromSlug(slug)

  const apolloClient = initializeApollo()
  await apolloClient.query<gg.BookPageEdition, gg.BookPageEditionVariables>({
    query: gg.BookPageEditionDocument,
    variables: { id },
  })

  return {
    props: {
      id,
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default BookPage
