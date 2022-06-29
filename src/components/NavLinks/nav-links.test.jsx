import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import { screen } from '@testing-library/react';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('Should render', () => {
    renderTheme(<NavLinks links={mock} />);
    const component = screen.getAllByRole('link');
    expect(component).toHaveLength(mock.length);
  });

  it('Should not links', () => {
    renderTheme(<NavLinks />);
    const component = screen.queryAllByText(/links/i);
    expect(component).toHaveLength(0);
  });

  it('Should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    const component = screen.getByText(/link 10/i).parentElement;
    expect(component).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium,
    });
  });

  it('Should match snapchot', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
