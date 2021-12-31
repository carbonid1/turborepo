import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { Authors, IAuthors } from '.';

export default {
  title: 'Authors',
  component: Authors,
} as Meta;

const Template: Story<IAuthors> = args => <Authors {...args} />;

export const Default = Template.bind({});
Default.args = {
  authors: [
    { fullName: 'Stephen Baxter', id: 1 },
    { fullName: 'Terry Pratchett', id: 2 },
  ],
};

export const ColumnSuffix = Template.bind({});
ColumnSuffix.args = {
  ...Default.args,
  lastAuthorSuffix: ':',
};
