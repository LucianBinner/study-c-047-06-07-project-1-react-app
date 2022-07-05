import { renderTheme } from '../../styles/render-theme';
import { GridContent } from '.';
import mock from './mock';

describe('<GridContent />', () => {
  it('Should render grid content', () => {
    const { container } = renderTheme(<GridContent {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('Should render grid content with background undefined', () => {
    const { container } = renderTheme(
      <GridContent {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
