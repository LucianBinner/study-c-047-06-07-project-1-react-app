import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumn } from '.';
import mock from './mock';

describe('<GridTwoColumn />', () => {
  it('Should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render two column grid with background undefined', () => {
    const { container } = renderTheme(
      <GridTwoColumn {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
