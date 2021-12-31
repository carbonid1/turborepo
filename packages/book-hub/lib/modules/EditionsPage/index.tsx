import type { GetServerSideProps, NextPage } from 'next'
import NextImage from 'next/image'
import { CustomHead } from 'lib/components/CustomHead'
import { ROUTE } from 'lib/consts/routes'
import { TextLink } from 'lib/components'
import { extractIdFromSlug, formatDate } from 'lib/utils'
import languageService from 'lib/services/language.service'
import { ByAuthors } from 'lib/components/Authors/ByAuthors'
import { ServerError } from 'lib/components/@errors/ServerError'
import { NotFound } from 'lib/components/@errors/NotFound'
import { initializeApollo } from 'lib/apollo'
import gg from 'lib/generated'

interface IEditionsPage {
  id: string
}

const EditionsPage: NextPage<IEditionsPage> = ({ id }) => {
  const { data, error } = gg.useEditionsPageBook({ variables: { id } })
  const { book } = data ?? {}

  if (error) return <ServerError />
  if (!book) return <NotFound />

  const { editions, publishedIn, authors } = book
  const { title, description } = editions[0]

  return (
    <div>
      <CustomHead title={title} description={description} />
      <div>
        <b>{title}</b>
        <ByAuthors authors={authors} />
        {publishedIn && <div>First published in {formatDate(publishedIn)}</div>}
        <div className="mt-8">
          {editions.map(edition => (
            <div key={edition.id} className="grid sm:grid-cols-[auto,1fr] gap-x-6 gap-y-2 mb-6">
              <div className="justify-self-center">
                <NextImage
                  width="160px"
                  height="240px"
                  className="rounded"
                  src={edition.cover || ''}
                  alt={edition.title}
                />
              </div>
              <div className="max-w-xs text-center sm:text-left justify-self-center sm:justify-self-start sm:max-w-md">
                <TextLink path={`/${ROUTE.book}/${edition.id}`} slug={edition.title}>
                  {edition.title}
                </TextLink>
                <div>
                  <b>Published in: </b>
                  {formatDate(edition.publishedIn)}
                </div>
                {edition.lang && (
                  <div>
                    <b>Edition language: </b>
                    {languageService.getName(edition.lang)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const slug = ctx.query.slug as string
  const id = extractIdFromSlug(slug)

  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: gg.EditionsPageBookDocument,
    variables: { id },
  })

  return {
    props: {
      id,
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default EditionsPage
