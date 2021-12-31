import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
};

export type Author = {
  bio?: Maybe<Scalars['String']>;
  books: Array<Book>;
  fullName: Scalars['String'];
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
};

export type Book = {
  authors: Array<Author>;
  editions: Array<Edition>;
  id: Scalars['Int'];
  publishedIn: Scalars['String'];
};

export type Edition = {
  book: Book;
  cover?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lang?: Maybe<Scalars['String']>;
  publishedIn?: Maybe<Scalars['String']>;
  reviews: Array<Review>;
  title: Scalars['String'];
};

export type Mutation = {
  updateProfile: User;
};

export type MutationUpdateProfileArgs = {
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  author?: Maybe<Author>;
  book?: Maybe<Book>;
  books: Array<Book>;
  edition?: Maybe<Edition>;
  profile?: Maybe<User>;
  review?: Maybe<Review>;
  reviews: Array<Review>;
  user?: Maybe<User>;
};

export type QueryAuthorArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryBookArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryEditionArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryReviewArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type QueryReviewsArgs = {
  bookId?: Maybe<Scalars['ID']>;
  editionId?: Maybe<Scalars['ID']>;
  lang?: Maybe<Scalars['String']>;
};

export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type Review = {
  body: Scalars['String'];
  createdAt: Scalars['String'];
  creator: User;
  edition: Edition;
  id: Scalars['Int'];
  lang?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type ReviewCreatorArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type ReviewEditionArgs = {
  id?: Maybe<Scalars['ID']>;
};

export type User = {
  createdAt: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  emailVerified?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
};

export type ByAuthorsFragment = { authors: Array<{ id: number; fullName: string }> };

export type AuthorsFragment = { authors: Array<{ id: number; fullName: string }> };

export type UpdateProfileHookVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;

export type UpdateProfileHook = { updateProfile: { id: string; name?: string | null | undefined } };

export type ProfileHookVariables = Exact<{ [key: string]: never }>;

export type ProfileHook = {
  profile?:
    | { id: string; image?: string | null | undefined; name?: string | null | undefined }
    | null
    | undefined;
};

export type AuthorPageAuthorVariables = Exact<{
  id: Scalars['ID'];
}>;

export type AuthorPageAuthor = {
  author?:
    | {
        id: number;
        bio?: string | null | undefined;
        fullName: string;
        imageUrl?: string | null | undefined;
        books: Array<{
          id: number;
          editions: Array<{ title: string; description?: string | null | undefined; id: number }>;
        }>;
      }
    | null
    | undefined;
};

export type BookPageEditionVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
}>;

export type BookPageEdition = {
  edition?:
    | {
        lang?: string | null | undefined;
        title: string;
        cover?: string | null | undefined;
        description?: string | null | undefined;
        publishedIn?: string | null | undefined;
        book: { id: number; authors: Array<{ id: number; fullName: string }> };
      }
    | null
    | undefined;
};

export type BookReviewsVariables = Exact<{
  bookId?: Maybe<Scalars['ID']>;
  editionId?: Maybe<Scalars['ID']>;
  lang?: Maybe<Scalars['String']>;
}>;

export type BookReviews = {
  reviews: Array<{
    id: number;
    body: string;
    lang?: string | null | undefined;
    createdAt: string;
    creator: { id: string; name?: string | null | undefined; image?: string | null | undefined };
  }>;
};

export type BookReviewsLanguagesVariables = Exact<{
  bookId?: Maybe<Scalars['ID']>;
  editionId?: Maybe<Scalars['ID']>;
}>;

export type BookReviewsLanguages = { reviews: Array<{ lang?: string | null | undefined }> };

export type EditionFragment = {
  lang?: string | null | undefined;
  title: string;
  cover?: string | null | undefined;
  description?: string | null | undefined;
  publishedIn?: string | null | undefined;
  book: { id: number; authors: Array<{ id: number; fullName: string }> };
};

export type EditionsPageBookVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
}>;

export type EditionsPageBook = {
  book?:
    | {
        publishedIn: string;
        editions: Array<{
          id: number;
          lang?: string | null | undefined;
          title: string;
          cover?: string | null | undefined;
          description?: string | null | undefined;
          publishedIn?: string | null | undefined;
        }>;
        authors: Array<{ id: number; fullName: string }>;
      }
    | null
    | undefined;
};

export type IndexPageBooksVariables = Exact<{ [key: string]: never }>;

export type IndexPageBooks = {
  books: Array<{
    id: number;
    editions: Array<{ id: number; title: string; cover?: string | null | undefined }>;
  }>;
};

export type ReviewPageReviewVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
}>;

export type ReviewPageReview = {
  review?:
    | {
        body: string;
        edition: {
          title: string;
          cover?: string | null | undefined;
          book: { authors: Array<{ id: number; fullName: string }> };
        };
        creator: {
          id: string;
          image?: string | null | undefined;
          name?: string | null | undefined;
        };
      }
    | null
    | undefined;
};

export type UserPageVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
}>;

export type UserPage = {
  user?: { id: string; name?: string | null | undefined } | null | undefined;
};

export const AuthorsFragment = /*#__PURE__*/ gql`
  fragment AuthorsFragment on Book {
    authors {
      id
      fullName
    }
  }
`;
export const ByAuthorsFragment = /*#__PURE__*/ gql`
  fragment ByAuthorsFragment on Book {
    ...AuthorsFragment
  }
  ${AuthorsFragment}
`;
export const EditionFragment = /*#__PURE__*/ gql`
  fragment EditionFragment on Edition {
    lang
    title
    cover
    description
    publishedIn
    book {
      id
      ...ByAuthorsFragment
    }
  }
  ${ByAuthorsFragment}
`;
export const UpdateProfileHookDocument = /*#__PURE__*/ gql`
  mutation UpdateProfileHook($name: String) {
    updateProfile(name: $name) {
      id
      name
    }
  }
`;
export type UpdateProfileHookMutationFn = Apollo.MutationFunction<
  UpdateProfileHook,
  UpdateProfileHookVariables
>;

/**
 * __useUpdateProfileHook__
 *
 * To run a mutation, you first call `useUpdateProfileHook` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileHook` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileHook, { data, loading, error }] = useUpdateProfileHook({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateProfileHook(
  baseOptions?: Apollo.MutationHookOptions<UpdateProfileHook, UpdateProfileHookVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateProfileHook, UpdateProfileHookVariables>(
    UpdateProfileHookDocument,
    options,
  );
}
export type UpdateProfileHookHookResult = ReturnType<typeof useUpdateProfileHook>;
export type UpdateProfileHookMutationResult = Apollo.MutationResult<UpdateProfileHook>;
export type UpdateProfileHookMutationOptions = Apollo.BaseMutationOptions<
  UpdateProfileHook,
  UpdateProfileHookVariables
>;
export const ProfileHookDocument = /*#__PURE__*/ gql`
  query ProfileHook {
    profile {
      id
      image
      name
    }
  }
`;

/**
 * __useProfileHook__
 *
 * To run a query within a React component, call `useProfileHook` and pass it any options that fit your needs.
 * When your component renders, `useProfileHook` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileHook({
 *   variables: {
 *   },
 * });
 */
export function useProfileHook(
  baseOptions?: Apollo.QueryHookOptions<ProfileHook, ProfileHookVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProfileHook, ProfileHookVariables>(ProfileHookDocument, options);
}
export function useProfileHookLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProfileHook, ProfileHookVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProfileHook, ProfileHookVariables>(ProfileHookDocument, options);
}
export type ProfileHookHookResult = ReturnType<typeof useProfileHook>;
export type ProfileHookLazyQueryHookResult = ReturnType<typeof useProfileHookLazyQuery>;
export type ProfileHookQueryResult = Apollo.QueryResult<ProfileHook, ProfileHookVariables>;
export const AuthorPageAuthorDocument = /*#__PURE__*/ gql`
  query AuthorPageAuthor($id: ID!) {
    author(id: $id) {
      id
      bio
      fullName
      imageUrl
      books {
        editions {
          title
          description
          id
        }
        id
      }
    }
  }
`;

/**
 * __useAuthorPageAuthor__
 *
 * To run a query within a React component, call `useAuthorPageAuthor` and pass it any options that fit your needs.
 * When your component renders, `useAuthorPageAuthor` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAuthorPageAuthor({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAuthorPageAuthor(
  baseOptions: Apollo.QueryHookOptions<AuthorPageAuthor, AuthorPageAuthorVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AuthorPageAuthor, AuthorPageAuthorVariables>(
    AuthorPageAuthorDocument,
    options,
  );
}
export function useAuthorPageAuthorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AuthorPageAuthor, AuthorPageAuthorVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AuthorPageAuthor, AuthorPageAuthorVariables>(
    AuthorPageAuthorDocument,
    options,
  );
}
export type AuthorPageAuthorHookResult = ReturnType<typeof useAuthorPageAuthor>;
export type AuthorPageAuthorLazyQueryHookResult = ReturnType<typeof useAuthorPageAuthorLazyQuery>;
export type AuthorPageAuthorQueryResult = Apollo.QueryResult<
  AuthorPageAuthor,
  AuthorPageAuthorVariables
>;
export const BookPageEditionDocument = /*#__PURE__*/ gql`
  query BookPageEdition($id: ID) {
    edition(id: $id) {
      ...EditionFragment
    }
  }
  ${EditionFragment}
`;

/**
 * __useBookPageEdition__
 *
 * To run a query within a React component, call `useBookPageEdition` and pass it any options that fit your needs.
 * When your component renders, `useBookPageEdition` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookPageEdition({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBookPageEdition(
  baseOptions?: Apollo.QueryHookOptions<BookPageEdition, BookPageEditionVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BookPageEdition, BookPageEditionVariables>(
    BookPageEditionDocument,
    options,
  );
}
export function useBookPageEditionLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BookPageEdition, BookPageEditionVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BookPageEdition, BookPageEditionVariables>(
    BookPageEditionDocument,
    options,
  );
}
export type BookPageEditionHookResult = ReturnType<typeof useBookPageEdition>;
export type BookPageEditionLazyQueryHookResult = ReturnType<typeof useBookPageEditionLazyQuery>;
export type BookPageEditionQueryResult = Apollo.QueryResult<
  BookPageEdition,
  BookPageEditionVariables
>;
export const BookReviewsDocument = /*#__PURE__*/ gql`
  query BookReviews($bookId: ID, $editionId: ID, $lang: String) {
    reviews(lang: $lang, bookId: $bookId, editionId: $editionId) {
      id
      body
      lang
      createdAt
      creator {
        id
        name
        image
      }
    }
  }
`;

/**
 * __useBookReviews__
 *
 * To run a query within a React component, call `useBookReviews` and pass it any options that fit your needs.
 * When your component renders, `useBookReviews` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookReviews({
 *   variables: {
 *      bookId: // value for 'bookId'
 *      editionId: // value for 'editionId'
 *      lang: // value for 'lang'
 *   },
 * });
 */
export function useBookReviews(
  baseOptions?: Apollo.QueryHookOptions<BookReviews, BookReviewsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BookReviews, BookReviewsVariables>(BookReviewsDocument, options);
}
export function useBookReviewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BookReviews, BookReviewsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BookReviews, BookReviewsVariables>(BookReviewsDocument, options);
}
export type BookReviewsHookResult = ReturnType<typeof useBookReviews>;
export type BookReviewsLazyQueryHookResult = ReturnType<typeof useBookReviewsLazyQuery>;
export type BookReviewsQueryResult = Apollo.QueryResult<BookReviews, BookReviewsVariables>;
export const BookReviewsLanguagesDocument = /*#__PURE__*/ gql`
  query BookReviewsLanguages($bookId: ID, $editionId: ID) {
    reviews(bookId: $bookId, editionId: $editionId) {
      lang
    }
  }
`;

/**
 * __useBookReviewsLanguages__
 *
 * To run a query within a React component, call `useBookReviewsLanguages` and pass it any options that fit your needs.
 * When your component renders, `useBookReviewsLanguages` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookReviewsLanguages({
 *   variables: {
 *      bookId: // value for 'bookId'
 *      editionId: // value for 'editionId'
 *   },
 * });
 */
export function useBookReviewsLanguages(
  baseOptions?: Apollo.QueryHookOptions<BookReviewsLanguages, BookReviewsLanguagesVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BookReviewsLanguages, BookReviewsLanguagesVariables>(
    BookReviewsLanguagesDocument,
    options,
  );
}
export function useBookReviewsLanguagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BookReviewsLanguages, BookReviewsLanguagesVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BookReviewsLanguages, BookReviewsLanguagesVariables>(
    BookReviewsLanguagesDocument,
    options,
  );
}
export type BookReviewsLanguagesHookResult = ReturnType<typeof useBookReviewsLanguages>;
export type BookReviewsLanguagesLazyQueryHookResult = ReturnType<
  typeof useBookReviewsLanguagesLazyQuery
>;
export type BookReviewsLanguagesQueryResult = Apollo.QueryResult<
  BookReviewsLanguages,
  BookReviewsLanguagesVariables
>;
export const EditionsPageBookDocument = /*#__PURE__*/ gql`
  query EditionsPageBook($id: ID) {
    book(id: $id) {
      ...ByAuthorsFragment
      editions {
        id
        lang
        title
        cover
        description
        publishedIn
      }
      publishedIn
    }
  }
  ${ByAuthorsFragment}
`;

/**
 * __useEditionsPageBook__
 *
 * To run a query within a React component, call `useEditionsPageBook` and pass it any options that fit your needs.
 * When your component renders, `useEditionsPageBook` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditionsPageBook({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEditionsPageBook(
  baseOptions?: Apollo.QueryHookOptions<EditionsPageBook, EditionsPageBookVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<EditionsPageBook, EditionsPageBookVariables>(
    EditionsPageBookDocument,
    options,
  );
}
export function useEditionsPageBookLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<EditionsPageBook, EditionsPageBookVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<EditionsPageBook, EditionsPageBookVariables>(
    EditionsPageBookDocument,
    options,
  );
}
export type EditionsPageBookHookResult = ReturnType<typeof useEditionsPageBook>;
export type EditionsPageBookLazyQueryHookResult = ReturnType<typeof useEditionsPageBookLazyQuery>;
export type EditionsPageBookQueryResult = Apollo.QueryResult<
  EditionsPageBook,
  EditionsPageBookVariables
>;
export const IndexPageBooksDocument = /*#__PURE__*/ gql`
  query IndexPageBooks {
    books {
      id
      editions {
        id
        title
        cover
      }
    }
  }
`;

/**
 * __useIndexPageBooks__
 *
 * To run a query within a React component, call `useIndexPageBooks` and pass it any options that fit your needs.
 * When your component renders, `useIndexPageBooks` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexPageBooks({
 *   variables: {
 *   },
 * });
 */
export function useIndexPageBooks(
  baseOptions?: Apollo.QueryHookOptions<IndexPageBooks, IndexPageBooksVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<IndexPageBooks, IndexPageBooksVariables>(IndexPageBooksDocument, options);
}
export function useIndexPageBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IndexPageBooks, IndexPageBooksVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<IndexPageBooks, IndexPageBooksVariables>(
    IndexPageBooksDocument,
    options,
  );
}
export type IndexPageBooksHookResult = ReturnType<typeof useIndexPageBooks>;
export type IndexPageBooksLazyQueryHookResult = ReturnType<typeof useIndexPageBooksLazyQuery>;
export type IndexPageBooksQueryResult = Apollo.QueryResult<IndexPageBooks, IndexPageBooksVariables>;
export const ReviewPageReviewDocument = /*#__PURE__*/ gql`
  query ReviewPageReview($id: ID) {
    review(id: $id) {
      body
      edition {
        title
        cover
        book {
          ...AuthorsFragment
        }
      }
      creator {
        id
        image
        name
      }
    }
  }
  ${AuthorsFragment}
`;

/**
 * __useReviewPageReview__
 *
 * To run a query within a React component, call `useReviewPageReview` and pass it any options that fit your needs.
 * When your component renders, `useReviewPageReview` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewPageReview({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReviewPageReview(
  baseOptions?: Apollo.QueryHookOptions<ReviewPageReview, ReviewPageReviewVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ReviewPageReview, ReviewPageReviewVariables>(
    ReviewPageReviewDocument,
    options,
  );
}
export function useReviewPageReviewLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ReviewPageReview, ReviewPageReviewVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ReviewPageReview, ReviewPageReviewVariables>(
    ReviewPageReviewDocument,
    options,
  );
}
export type ReviewPageReviewHookResult = ReturnType<typeof useReviewPageReview>;
export type ReviewPageReviewLazyQueryHookResult = ReturnType<typeof useReviewPageReviewLazyQuery>;
export type ReviewPageReviewQueryResult = Apollo.QueryResult<
  ReviewPageReview,
  ReviewPageReviewVariables
>;
export const UserPageDocument = /*#__PURE__*/ gql`
  query UserPage($id: ID) {
    user(id: $id) {
      id
      name
    }
  }
`;

/**
 * __useUserPage__
 *
 * To run a query within a React component, call `useUserPage` and pass it any options that fit your needs.
 * When your component renders, `useUserPage` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserPage({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserPage(baseOptions?: Apollo.QueryHookOptions<UserPage, UserPageVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserPage, UserPageVariables>(UserPageDocument, options);
}
export function useUserPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserPage, UserPageVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserPage, UserPageVariables>(UserPageDocument, options);
}
export type UserPageHookResult = ReturnType<typeof useUserPage>;
export type UserPageLazyQueryHookResult = ReturnType<typeof useUserPageLazyQuery>;
export type UserPageQueryResult = Apollo.QueryResult<UserPage, UserPageVariables>;
export const names = {
  Query: {
    ProfileHook: 'ProfileHook',
    AuthorPageAuthor: 'AuthorPageAuthor',
    BookPageEdition: 'BookPageEdition',
    BookReviews: 'BookReviews',
    BookReviewsLanguages: 'BookReviewsLanguages',
    EditionsPageBook: 'EditionsPageBook',
    IndexPageBooks: 'IndexPageBooks',
    ReviewPageReview: 'ReviewPageReview',
    UserPage: 'UserPage',
  },
  Mutation: {
    UpdateProfileHook: 'UpdateProfileHook',
  },
  Fragment: {
    ByAuthorsFragment: 'ByAuthorsFragment',
    AuthorsFragment: 'AuthorsFragment',
    EditionFragment: 'EditionFragment',
  },
};
