import cn from 'classnames'
import * as Switch from '@radix-ui/react-switch'
import type { SwitchProps } from '@radix-ui/react-switch'

export interface IToggle extends SwitchProps {
  label?: string
}

export const Toggle: React.FC<IToggle> = ({ label, className, checked, ...props }) => {
  return (
    <div className={cn('inline-flex gap-x-2 items-center justify-between', className)}>
      {label && (
        <label htmlFor={props.id} className="text-sm font-medium text-skin-complement">
          {label}
        </label>
      )}
      <Switch.Root
        {...props}
        className={cn(
          checked ? 'bg-skin-button-base' : 'bg-skin-tertiary',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-skin-base rounded-full transition-colors ease-in-out duration-200',
        )}
      >
        <Switch.Thumb
          className={cn(
            checked ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-[white] shadow transform ring-0 transition ease-in-out duration-200',
          )}
        />
      </Switch.Root>
    </div>
  )
}
