import { ApolloClient, from, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { useMemo } from 'react';
import { onError } from '@apollo/client/link/error';
import { isSSR } from './utils';

type TApolloClient = ApolloClient<NormalizedCacheObject>;
type TInitialState = NormalizedCacheObject | null;
let apolloClient: TApolloClient;

const getURIConfig = () => {
  switch (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    case 'production':
      return { host: 'book-hub.vercel.app', protocol: 'https' };
    case 'preview':
      return { host: process.env.NEXT_PUBLIC_VERCEL_URL, protocol: 'https' };
    case 'development':
    default:
      return { host: 'localhost:3000', protocol: 'http' };
  }
};

type ApolloContext = any;
function createIsomorphicLink(context?: ApolloContext) {
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('@apollo/client/link/schema');
    const { schema } = require('../pages/api');
    return new SchemaLink({ schema, context });
  } else {
    const { HttpLink } = require('@apollo/client/link/http');
    const { host, protocol } = getURIConfig();
    const uri = `${protocol}://${host}/api`;

    return new HttpLink({
      uri,
      credentials: 'same-origin',
    });
  }
}

const createErrorLink = () => {
  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    if (networkError) console.error(`[Network error]: ${networkError}`);
  });
};

function createApolloClient(context?: ApolloContext) {
  return new ApolloClient({
    connectToDevTools: process.env.NODE_ENV !== 'production',
    ssrMode: isSSR(),
    link: from([createErrorLink(), createIsomorphicLink(context)]),
    cache: new InMemoryCache(),
  });
}

interface InitializeApollo {
  initialState?: TInitialState;
  context?: ApolloContext;
}
export function initializeApollo(options?: InitializeApollo): TApolloClient {
  const { initialState = null, context } = options ?? {};
  const _apolloClient = apolloClient ?? createApolloClient(context);

  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  if (isSSR()) return _apolloClient;
  apolloClient = apolloClient ?? _apolloClient;

  return apolloClient;
}

export function useApollo(initialState: TInitialState = null): TApolloClient {
  const store = useMemo(() => initializeApollo({ initialState }), [initialState]);
  return store;
}
