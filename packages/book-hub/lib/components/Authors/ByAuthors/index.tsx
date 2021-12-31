import React from 'react';
import type gg from 'lib/generated';
import { Authors } from '..';

export interface IByAuthors {
  authors: gg.ByAuthorsFragment['authors'];
  className?: string;
}

export const ByAuthors: React.FC<IByAuthors> = ({ className, authors }) => {
  if (!authors.length) return null;

  return (
    <div className={className}>
      <span className="mr-1">by</span>
      <Authors authors={authors} />
    </div>
  );
};
