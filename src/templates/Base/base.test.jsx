import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import mock from './mock';

describe('<Base />', () => {
  it('should render Base template', () => {
    const { container } = renderTheme(<Base {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
