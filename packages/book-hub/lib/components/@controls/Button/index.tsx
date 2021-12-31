import cn from 'classnames'

type JSXButtonProps = JSX.IntrinsicElements['button']
export interface ButtonProps extends JSXButtonProps {
  loading?: boolean
}
export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  loading,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={cn(
        className,
        'bg-skin-primary py-1 px-4 rounded-md min-w-[8rem] border-2 border-skin-base text-skin-inverted relative',
      )}
    >
      {loading && (
        <>
          <div className="absolute inset-0 bg-[#fff] opacity-30 pointer-events-none rounded-md" />
          <div className="absolute inset-0 grid place-items-center">
            <svg
              className="w-5 h-5 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        </>
      )}
      <span className={cn(loading && 'opacity-0')}>{children}</span>
    </button>
  )
}
