import type { Story, Meta } from '@storybook/react'
import mocks from 'lib/mocks'
import { Avatar, AvatarProps } from './index'

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta

const Template: Story<AvatarProps> = args => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
  href: '/',
  alt: mocks.users.ivan.name,
  src: mocks.users.ivan.image,
  'aria-label': `Read more about ${mocks.users.ivan.name}`,
}

export const NoProfileImage = Template.bind({})
NoProfileImage.args = {
  ...Default.args,
  src: null,
  fallbackImgSeed: '123',
}
