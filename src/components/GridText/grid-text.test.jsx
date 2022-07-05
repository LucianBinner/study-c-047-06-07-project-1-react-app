import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';

import mock from './mock';

describe('<GridText />', () => {
  it('Should render', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render GridText with background undefined', () => {
    const { container } = renderTheme(
      <GridText {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
