import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'primary',
    height: 'content',
    width: 'content',
    paddingX: 'S16',
    paddingY: 'S8',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    height: 'content',
    width: 'content',
    paddingX: 'S16',
    paddingY: 'S8',
  },
};

export const DisabledPrimary: Story = {
  args: {
    type: 'primary',
    height: 'content',
    width: 'content',
    paddingX: 'S16',
    paddingY: 'S8',
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    type: 'secondary',
    height: 'content',
    width: 'content',
    paddingX: 'S16',
    paddingY: 'S8',
    disabled: true,
  },
};
