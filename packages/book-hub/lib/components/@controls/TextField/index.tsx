import cn from 'classnames';

export interface TextFieldProps {
  className?: string;
  inputProps?: JSX.IntrinsicElements['input'];
  label?: React.ReactNode;
  size?: 'md';
}
export const TextField: React.FC<TextFieldProps> = ({ className, inputProps, label }) => {
  return (
    <fieldset className={cn(className, 'grid gap-1')}>
      {label && (
        <label htmlFor={inputProps?.id} className="text-sm font-bold">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className="px-3 py-1 rounded-md dark:border-2 bg-skin-tertiary focus:ring-2 focus:ring-skin-primary focus:outline-none dark:bg-skin-complement border-skin-base"
      />
    </fieldset>
  );
};
