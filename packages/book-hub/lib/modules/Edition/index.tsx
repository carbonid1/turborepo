import cn from 'classnames'
import { CoverImage } from 'lib/components/CoverImage'
import languageService from 'lib/services/language.service'
import { formatDate } from 'lib/utils'
import { ByAuthors } from 'lib/components/Authors/ByAuthors'
import { Paragraph } from 'lib/components/@typography/Paragraph'
import type gg from 'lib/generated'

export interface IEditionProps {
  className?: string
  edition: gg.EditionFragment
}

export const Edition: React.FC<IEditionProps> = ({ className, edition }) => {
  const { title, description, publishedIn, book, lang, cover } = edition

  return (
    <div className={cn('grid justify-start sm:grid-flow-col gap-10', className)}>
      <CoverImage src={cover} alt={title} className="justify-self-center" />
      <div>
        <div>
          <b>{title}</b>
        </div>
        <ByAuthors authors={book.authors} />
        {publishedIn && (
          <div>
            <b>Date Published: </b>
            {formatDate(publishedIn)}
          </div>
        )}
        {lang && (
          <div>
            <b>Edition Language: </b>
            {languageService.getName(lang)}
          </div>
        )}
        {description && (
          <Paragraph ellipsis={{ rows: 5 }} className="my-2">
            {description}
          </Paragraph>
        )}
      </div>
    </div>
  )
}
