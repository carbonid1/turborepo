import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { NotFound } from '.';

export default {
  title: '@errors/NotFound',
  component: NotFound,
} as Meta;

const Template: Story = args => <NotFound {...args} />;
export const Default = Template.bind({});
