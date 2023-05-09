import type { Meta } from '@storybook/react';
import AutoComplete from './AutoComplete';

const meta: Meta<typeof AutoComplete> = {
  title: 'AutoComplete',
  component: AutoComplete,
};

export default meta;

export const Basic = (args: any) => <AutoComplete />;
Basic.args = {};
