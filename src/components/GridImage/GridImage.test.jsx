import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';

import mock from './mock';

describe('<GridImage />', () => {
  it('Should render', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render GridText with background undefined', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
