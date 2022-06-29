import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere quam tenetur ex recusandae! Ullam fugiat cum qui iusto minima asperiores animi aliquid quasi, delectus labore voluptatem ratione perspiciatis facilis.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
