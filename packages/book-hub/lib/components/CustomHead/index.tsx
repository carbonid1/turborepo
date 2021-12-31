import Head from 'next/head';
import type { ReactNode } from 'react';

interface ICustomHead {
  title?: ReactNode;
  description?: string | null;
}
export const CustomHead: React.FC<ICustomHead> = ({ title, description }) => {
  return (
    <Head>
      <title key="title">{title} - BookHub</title>
      {description && (
        <meta name="description" key="description" content={truncateDescription(description)} />
      )}
    </Head>
  );
};

const truncateDescription = (description: string) => {
  const maxLength = 152;
  return description.length <= maxLength
    ? description
    : description.substring(0, maxLength) + '...';
};
