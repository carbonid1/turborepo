import type { Story, Meta } from '@storybook/react'
import mocks from 'lib/mocks'
import { ByAuthors, IByAuthors } from '.'

export default { title: 'Authors/ByAuthors', component: ByAuthors } as Meta
const Template: Story<IByAuthors> = args => <ByAuthors {...args} />

export const Default = Template.bind({})
Default.args = {
  authors: mocks.books.LongMars.authors,
}

export const NoAuthors = Template.bind({})
NoAuthors.args = {
  ...Default.args,
  authors: [],
}
