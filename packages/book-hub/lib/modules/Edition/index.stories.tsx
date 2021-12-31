import type { Story, Meta } from '@storybook/react'
import type gg from 'lib/generated'
import mocks from 'lib/mocks'
import { Edition, IEditionProps } from '.'

const edition: gg.Edition = {
  ...mocks.editions.rangeEng,
  book: mocks.books.range,
}

export default {
  title: 'modules/Edition',
  component: Edition,
  decorators: [
    Story => (
      <div className="max-w-5xl p-4">
        <Story />
      </div>
    ),
  ],
} as Meta
const Template: Story<IEditionProps> = args => <Edition {...args} />

export const Default = Template.bind({})
Default.args = {
  edition,
}

export const NoPublishedDate = Template.bind({})
NoPublishedDate.args = {
  edition: { ...edition, publishedIn: null },
}

export const NoLanguage = Template.bind({})
NoLanguage.args = {
  edition: { ...edition, lang: null },
}

export const NoDescription = Template.bind({})
NoDescription.args = {
  edition: { ...edition, description: null },
}

export const NoAuthours = Template.bind({})
NoAuthours.args = {
  edition: { ...edition, book: { ...edition.book, authors: [] } },
}
