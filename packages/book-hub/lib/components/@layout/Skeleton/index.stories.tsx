import type { Story, Meta } from '@storybook/react'
import { Skeleton, ISkeleton } from '.'

export default { title: '@layout/Skeleton', component: Skeleton } as Meta
const Template: Story<ISkeleton> = props => <Skeleton {...props} />

export const Default = Template.bind({})
Default.args = {}
