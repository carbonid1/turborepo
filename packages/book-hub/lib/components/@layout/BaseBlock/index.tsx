import type { FC, ReactNode } from 'react';

export interface IBaseBlock {
  img: ReactNode;
  title?: ReactNode;
  subTitle: ReactNode;
}

export const BaseBlock: FC<IBaseBlock> = ({ img, title, subTitle }) => {
  return (
    <div className="grid gap-4 m-8 place-items-center">
      {img}
      {title && <div className="text-2xl">{title}</div>}
      <div className="text-center">{subTitle}</div>
    </div>
  );
};
