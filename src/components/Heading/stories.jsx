import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Thema esta claro!',
    colorDark: true,
    as: 'h1',
    size: 'big',
    uppercase: false,
  },
  argTypes: {
    children: { type: 'string' },
    colorDark: { type: 'boolean' },
    as: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    size: {
      control: 'select',
      options: ['small', 'medium', 'big', 'huge'],
    },
    uppercase: { type: 'boolean' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'Thema está escuro!',
  colorDark: false,
};
