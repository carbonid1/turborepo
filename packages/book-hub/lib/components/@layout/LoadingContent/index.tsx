import { CollectionIcon } from '@heroicons/react/solid'
import { ReactNode, useEffect, useState } from 'react'
import cn from 'classnames'
import { BaseBlock, IBaseBlock } from 'lib/components/@layout/BaseBlock'
import { Skeleton } from '../Skeleton'

export interface ILoadingContent extends Pick<IBaseBlock, 'subTitle' | 'title'> {
  className?: string
  loading: boolean
  empty: boolean
  loader?: ReactNode
  initiallyLoaded: boolean
}

export const LoadingContent: React.FC<ILoadingContent> = ({
  empty,
  title,
  loader,
  loading,
  subTitle,
  children,
  className,
  initiallyLoaded,
}) => {
  const [innerLoading, setInnerLoading] = useState(loading)

  useEffect(() => {
    if (loading) {
      setInnerLoading(loading)
    } else {
      const timeoutId = setTimeout(() => {
        setInnerLoading(loading)
      }, 300)

      return () => clearTimeout(timeoutId)
    }
  }, [loading])

  return (
    <div className={cn(innerLoading && 'animate-pulse', className)}>
      {innerLoading && !initiallyLoaded ? (
        loader || <Skeleton />
      ) : empty ? (
        <BaseBlock
          title={title}
          subTitle={subTitle}
          img={<CollectionIcon className="h-40 text-skin-skeleton" />}
        />
      ) : (
        children
      )}
    </div>
  )
}
