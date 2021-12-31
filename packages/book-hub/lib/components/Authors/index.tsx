import React from 'react'
import { TextLink } from 'lib/components'
import { ROUTE } from 'lib/consts/routes'
import type gg from 'lib/generated'

export interface IAuthors {
  authors: gg.AuthorsFragment['authors']
  lastAuthorSuffix?: string
}

const isLastAuthor = (length: number, index: number) => length - 1 === index

export const Authors: React.FC<IAuthors> = ({ authors = [], lastAuthorSuffix = '' }) => {
  return (
    <>
      {authors.map(({ fullName, id }, index) => (
        <span key={id}>
          <TextLink path={`/${ROUTE.author}/${id}`} slug={fullName}>
            {fullName}
          </TextLink>
          {isLastAuthor(authors.length, index) ? lastAuthorSuffix : ', '}
        </span>
      ))}
    </>
  )
}
