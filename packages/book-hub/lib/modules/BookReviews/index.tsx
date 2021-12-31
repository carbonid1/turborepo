import { useState } from 'react'
import { formatDate } from 'lib/utils'
import { Select, ISelect } from 'lib/components/@controls/Select'
import { LoadingContent } from 'lib/components/@layout/LoadingContent'
import { Paragraph } from 'lib/components/@typography/Paragraph'
import { Skeleton } from 'lib/components/@layout/Skeleton'
import { useToggler } from 'lib/hooks'
import { Toggle } from 'lib/components/@controls/Toggle'
import { Avatar } from 'lib/components/Avatar'
import { ROUTE } from 'lib/consts/routes'
import type { BookReviewsProps, SelectedLanguage } from './interface'
import { useLangOptions, useReviewsQuery } from './hooks'
import { ReviewDropdown } from './ReviewDropdown'

export const BookReviews: React.FC<BookReviewsProps> = props => {
  const [thisEdition, setThisEdition] = useToggler()
  const [lang, setLang] = useState<ISelect<SelectedLanguage>['value']>(null)
  const bookId = props.bookId.toString()
  const editionId = thisEdition ? props.editionId.toString() : null
  const { reviews, loading, previousData } = useReviewsQuery({
    lang,
    bookId,
    editionId,
  })
  const langOptions = useLangOptions({ bookId, editionId })

  return (
    <div>
      <div className="py-4 text-2xl font-bold">Reviews:</div>
      <div className="flex gap-x-4">
        <Select options={langOptions} value={lang} onChange={setLang} />
        <Toggle
          label="This Edition"
          checked={thisEdition}
          onCheckedChange={() => {
            setLang(null)
            setThisEdition()
          }}
        />
      </div>
      <LoadingContent
        className="mt-6"
        loading={loading}
        empty={!reviews.length}
        initiallyLoaded={Boolean(previousData)}
        subTitle="There are no reviews yet. You can submit the first one!"
        loader={
          <div className="flex flex-col gap-y-4">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        }
      >
        <div className="grid gap-8 auto-rows-max">
          {reviews.map(review => {
            const { creator } = review
            return (
              <div key={review.id} className="relative grid items-center gap-2 max-w-prose">
                <Avatar
                  src={creator.image}
                  fallbackImgSeed={creator.id}
                  href={`/${ROUTE.user}/${creator.id}`}
                  aria-label={`Read more about ${creator.name}`}
                  alt={creator.name ?? "review's author avatar"}
                />
                <div className="self-end mr-8 text-sm font-bold justify-self-end">
                  {formatDate(review.createdAt)}
                </div>
                <ReviewDropdown reviewId={review.id} />
                <Paragraph ellipsis={{ rows: 5 }} className="col-span-2">
                  {review.body}
                </Paragraph>
              </div>
            )
          })}
        </div>
      </LoadingContent>
    </div>
  )
}
