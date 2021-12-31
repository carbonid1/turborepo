import { useState } from 'react';
import type { Story, Meta } from '@storybook/react';
import { Select, ISelect } from '.';

export default {
  title: '@controls/Select',
  component: Select,
  decorators: [
    Story => (
      <div className="w-60">
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<ISelect<string | undefined>> = props => {
  const [value, onChange] = useState<string | undefined>();
  return <Select {...props} value={value} onChange={onChange} />;
};

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

export const Default = Template.bind({});
Default.args = {
  options: people.map(({ name }) => ({ value: name, label: name })),
  placeholder: 'Select Someone',
};
