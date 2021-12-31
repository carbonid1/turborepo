import type { GetServerSideProps, NextPage } from 'next'
import { CustomHead } from 'lib/components/CustomHead'
import { initializeApollo } from 'lib/apollo'
import gg from 'lib/generated'
import { ServerError } from 'lib/components/@errors/ServerError'
import { NotFound } from 'lib/components/@errors/NotFound'

interface UserPage {
  id: string
}

const UserPage: NextPage<UserPage> = ({ id }) => {
  const { data, error } = gg.useUserPage({ variables: { id } })
  const { user } = data ?? {}

  if (error) return <ServerError />
  if (!user) return <NotFound />

  const { name } = user

  return (
    <>
      <CustomHead title={name} />
      <div>
        <div className="mb-4">
          <b>{name}</b> personal page
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const id = ctx.query.id as string

  const apolloClient = initializeApollo()
  await apolloClient.query<gg.UserPage, gg.UserPageVariables>({
    query: gg.UserPageDocument,
    variables: { id },
  })

  return {
    props: {
      id,
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default UserPage
