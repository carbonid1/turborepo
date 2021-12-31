import type { Story, Meta } from '@storybook/react'
import { Paragraph, IParagraph } from '.'

export default { title: '@typography/Paragraph', component: Paragraph } as Meta
const Template: Story<IParagraph> = props => <Paragraph {...props} />

export const Default = Template.bind({})
Default.args = {
  children:
    'The vengeful King Schahriar agrees to stave off the execution of Queen Scheherazade until she finishes a particularly compelling story. Her plan? Bleed one tale into another. Through fanciful histories, romances, tragedies, comedies, poems, riddles, and songs, Scheherazade prolongs her life by holding the king’s rapt attention. With origins in Persian and Eastern Indian folklore, the stories of The Arabian Nights have been reworked, reshaped, revised, collected, and supplemented throughout the centuries by various authors and scholars - and are continually redefined by the modern translations of the Western world.',
}

export const DefaultEllipsis = Template.bind({})
DefaultEllipsis.args = {
  ...Default.args,
  ellipsis: true,
}

export const ConfiguredEllipsis = Template.bind({})
ConfiguredEllipsis.args = {
  ...Default.args,
  ellipsis: {
    rows: 5,
    expandable: true,
  },
}
