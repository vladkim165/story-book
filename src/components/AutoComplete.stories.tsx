import type { Meta, StoryObj } from '@storybook/react';
import AutoComplete from './AutoComplete';

const meta: Meta<typeof AutoComplete> = {
  title: 'AutoComplete',
  component: AutoComplete,
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

export const Basic = (args: any) => <AutoComplete />;
Basic.args = {};
