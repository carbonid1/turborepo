import cn from 'classnames';

export interface ISkeleton {
  className?: string;
}

export const Skeleton: React.FC<ISkeleton> = ({ className }) => {
  return <div className={cn('rounded-lg h-20 bg-skin-skeleton', className)} />;
};
