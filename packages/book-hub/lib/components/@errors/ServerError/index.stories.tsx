import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { ServerError } from '.';

export default {
  title: '@errors/ServerError',
  component: ServerError,
} as Meta;

const Template: Story = args => <ServerError {...args} />;
export const Default = Template.bind({});
