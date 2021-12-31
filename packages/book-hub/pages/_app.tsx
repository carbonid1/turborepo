import 'styles/globals.css'
import { useEffect } from 'react'
import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/client'
import { IdProvider } from '@radix-ui/react-id'
import { Toaster } from 'react-hot-toast'
import { AppHeader } from 'lib/modules/AppHeader'
import { initializeApollo, useApollo } from 'lib/apollo'
import trackingService from 'lib/services/tracking'
import { AppWrapper } from 'lib/components/AppWrapper'
import { AppProgress } from 'lib/modules/AppProgress'
import gg from 'lib/generated'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const { initialApolloState, initialAppApolloState } = pageProps
  const apolloClient = useApollo({
    ...initialAppApolloState,
    ...initialApolloState,
    ROOT_QUERY: {
      ...initialAppApolloState.ROOT_QUERY,
      ...initialApolloState?.ROOT_QUERY,
    },
  })

  useEffect(() => {
    trackingService.init()
  }, [])

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title key="title">BookHub</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>
      <IdProvider>
        <AppProgress />
        <AppHeader />
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </IdProvider>
      <Toaster toastOptions={{ position: 'bottom-right' }} />
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  const apolloClient = initializeApollo({ context: appContext.ctx })

  await apolloClient.query({ query: gg.ProfileHookDocument })

  return {
    ...appProps,
    pageProps: {
      ...appProps.pageProps,
      initialAppApolloState: apolloClient.cache.extract(),
    },
  }
}

export default MyApp
