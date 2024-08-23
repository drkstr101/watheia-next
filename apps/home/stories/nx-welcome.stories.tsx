import type { Meta, StoryObj } from '@storybook/react';
import Index from '../app/page';

const meta: Meta<typeof Index> = {
  component: Index,
  title: 'Index',
};
export default meta;
type Story = StoryObj<typeof Index>;

export const Page: Story = {
  args: {},
};

// export const Heading: Story = {
//   args: {},
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     expect(canvas.getByText(/Welcome home/gi)).toBeTruthy();
//   },
// };
