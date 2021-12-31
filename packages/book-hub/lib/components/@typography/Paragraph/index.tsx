import type { ReactNode } from 'react'
import cn from 'classnames'
import { TextLink } from 'lib/components'
import hooks, { TParagraphEllipsis } from './hooks'

export interface IParagraph {
  className?: string
  children: ReactNode
  ellipsis: TParagraphEllipsis
}

export const Paragraph: React.FC<IParagraph> = ({ className, children, ellipsis }) => {
  const { lineClampClassName, paragraphRef, expanded, isActive, onExpand } =
    hooks.useEllipsis(ellipsis)

  return (
    <div className={cn('max-w-prose', className)}>
      <p className={lineClampClassName} ref={paragraphRef}>
        {children}
      </p>
      {isActive && (
        <TextLink onClick={onExpand} aria-expanded={expanded}>
          {expanded ? 'Show less' : 'Read more'}
        </TextLink>
      )}
    </div>
  )
}
