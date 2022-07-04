import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          ipsum animi vitae ducimus eos. Eveniet omnis nisi placeat ipsa
          consequuntur voluptatibus earum accusantium architecto atque,
          exercitationem nam, recusandae tempore quam.
        </p>
      </div>
    ),
    background: false,
  },
  argTypes: {
    children: { type: '' },
    background: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
