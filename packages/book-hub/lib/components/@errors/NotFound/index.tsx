import React from 'react'
import Image from 'next/image'
import { BaseBlock } from '../../@layout/BaseBlock'

export const NotFound: React.FC = () => {
  return (
    <BaseBlock
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      img={
        <Image
          src="/assets/errors/404.svg"
          alt="a person scratching his head"
          width="252"
          height="294"
        />
      }
    />
  )
}
