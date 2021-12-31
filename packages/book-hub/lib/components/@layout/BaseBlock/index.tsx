export interface IBaseBlock {
  img: React.ReactNode
  title?: React.ReactNode
  subTitle: React.ReactNode
}

export const BaseBlock: React.FC<IBaseBlock> = ({ img, title, subTitle }) => {
  return (
    <div className="grid gap-4 m-8 place-items-center">
      {img}
      {title && <div className="text-2xl">{title}</div>}
      <div className="text-center">{subTitle}</div>
    </div>
  )
}
