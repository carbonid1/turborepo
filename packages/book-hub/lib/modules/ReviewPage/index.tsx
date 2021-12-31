import type { GetServerSideProps, NextPage } from 'next'
import NextImage from 'next/image'
import { CustomHead } from 'lib/components/CustomHead'
import { initializeApollo } from 'lib/apollo'
import { ServerError } from 'lib/components/@errors/ServerError'
import { NotFound } from 'lib/components/@errors/NotFound'
import gg from 'lib/generated'
import { Avatar } from 'lib/components/Avatar'
import { ByAuthors } from 'lib/components/Authors/ByAuthors'
import { ROUTE } from 'lib/consts/routes'

interface IReview {
  id: string
}

const Review: NextPage<IReview> = ({ id }) => {
  const { data, error } = gg.useReviewPageReview({ variables: { id } })
  const { review } = data ?? {}

  if (error) return <ServerError />
  if (!review) return <NotFound />

  const { body, edition, creator } = review
  const { title } = edition

  return (
    <>
      <CustomHead title={`review of ${title}`} description={body} />
      <div className="grid grid-cols-[1fr,auto] grid-rows-[auto,auto,1fr] sm:grid-rows-[auto,auto,auto,1fr] gap-x-6 mb-6">
        <div className="w-40 row-span-3 h-60 sm:row-span-4">
          <NextImage
            width="160px"
            height="240px"
            className="rounded"
            src={edition.cover || ''}
            alt={edition.title}
          />
        </div>
        <div>
          <b>{title}</b>
        </div>
        <ByAuthors authors={edition.book.authors} className="mb-4" />
        <Avatar
          size="lg"
          src={creator.image}
          fallbackImgSeed={creator.id}
          href={`/${ROUTE.user}/${creator.id}`}
          aria-label={`Read more about ${creator.name}`}
          alt={creator.name ?? "review's author avatar"}
        />
        <div className="col-span-2 sm:col-auto">{body}</div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.query.id as string

  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: gg.ReviewPageReviewDocument,
    variables: { id },
  })

  return {
    props: {
      id,
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Review
