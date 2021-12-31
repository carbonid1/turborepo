import React, { MouseEventHandler } from 'react'
import NextLink from 'next/link'
import slugify from 'slugify'
import cn from 'classnames'

type ReactAnchor = JSX.IntrinsicElements['button']
type Color = 'base' | 'text'
export interface TextLinkProps {
  className?: ReactAnchor['className']
  style?: ReactAnchor['style']
  onClick?: MouseEventHandler
  path?: string
  slug?: string
  color?: Color
}

const TextLink: React.FC<TextLinkProps> = ({
  path,
  slug,
  children,
  className,
  color,
  ...props
}) => {
  if (!path) {
    return (
      <button
        {...props}
        className={cn(
          'leading-tight text-skin-primary shadow-underline',
          {
            'text-skin-base': color === 'text',
          },
          className,
        )}
      >
        {children}
      </button>
    )
  } else {
    const href = slug ? `${path}.${slugify(slug, { lower: false })}` : path

    return (
      <NextLink href={href}>
        <a
          {...props}
          href={href}
          className={cn(
            'text-skin-primary shadow-underline',
            {
              'text-skin-base': color === 'text',
            },
            className,
          )}
        >
          {children}
        </a>
      </NextLink>
    )
  }
}

export default TextLink
