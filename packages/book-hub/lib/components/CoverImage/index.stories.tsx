import type { Story, Meta } from '@storybook/react';
import { CoverImage, ICoverImage } from '.';

export default { title: 'CoverImage', component: CoverImage } as Meta;
const Template: Story<ICoverImage> = args => <CoverImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://res.cloudinary.com/book-hub/image/upload/v1621965132/covers/sm/range_fy4vdv.jpg',
  alt: 'Range: Why Generalists Triumph in a Specialized World',
};
