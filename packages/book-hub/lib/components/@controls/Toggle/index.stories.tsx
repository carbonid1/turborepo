import type { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { Toggle, IToggle } from '.';

export default { title: '@controls/Toggle', component: Toggle } as Meta;
const Template: Story<IToggle> = props => {
  const [isChecked, onChange] = useState(props.checked);
  return <Toggle {...props} checked={isChecked} onCheckedChange={onChange} />;
};

export const Default = Template.bind({});
Default.args = { checked: true };

export const WithLabel = Template.bind({});
WithLabel.args = { ...Default.args, label: 'Show All' };
