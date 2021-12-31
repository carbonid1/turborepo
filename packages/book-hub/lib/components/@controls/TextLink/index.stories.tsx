import React from 'react';
import type { Story, Meta } from '@storybook/react';
import TextLink, { TextLinkProps } from '.';

export default {
  title: '@controls/TextLink',
  component: TextLink,
} as Meta;

const Template: Story<TextLinkProps> = args => <TextLink {...args}>Click Me!</TextLink>;

export const Button = Template.bind({});
Button.args = {};

export const Link = Template.bind({});
Link.args = {
  path: '#',
};
