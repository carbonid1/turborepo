import React from 'react';
import Image from 'next/image';
import { BaseBlock } from '../../@layout/BaseBlock';

export const ServerError: React.FC = () => {
  return (
    <BaseBlock
      title="500"
      subTitle="Sorry, we're experiencing technical issues."
      img={
        <Image
          src="/assets/errors/500.svg"
          alt="a person scratching his head"
          width="252"
          height="294"
        />
      }
    />
  );
};
