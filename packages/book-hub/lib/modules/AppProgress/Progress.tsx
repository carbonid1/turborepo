import * as RadixProgress from '@radix-ui/react-progress'
import { useNProgress } from '@tanem/react-nprogress'
import cn from 'classnames'
import { useAppProgress } from './useAppProgress'

export const Progress: React.FC = () => {
  const isAnimating = useAppProgress(state => state.isAnimating)
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  })
  const progressInPercentage = progress * 100

  return (
    <RadixProgress.Root value={progressInPercentage} className="sticky top-0 w-full z-progress">
      <RadixProgress.Indicator
        className={cn(
          'h-1 rounded-tr-lg rounded-br-lg bg-skin-primary',
          isFinished ? 'opacity-0' : 'opacity-100',
        )}
        style={{
          height: 3,
          width: `${progressInPercentage}%`,
          transition: `width ${animationDuration}ms cubic-bezier(0.65, 0, 0.35, 1)`,
        }}
      />
    </RadixProgress.Root>
  )
}
