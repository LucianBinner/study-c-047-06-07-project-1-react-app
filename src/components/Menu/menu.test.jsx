import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import { fireEvent, screen } from '@testing-library/react';

import linkMock from '../NavLinks';
import { theme } from '../../styles/theme';
const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('Should render Logo and Main Menu Nav', () => {
    const { container } = renderTheme(
      <Menu links={linkMock} logoData={logoData} />,
    );
    const primaryComponent = screen.getByRole('heading', { name: 'Logo' });
    expect(primaryComponent).toBeInTheDocument();
    const secondaryComponent = screen.getByRole('navigation', {
      name: 'Main menu',
    });
    expect(secondaryComponent).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('Should render menu mobile and button for open and close the Menu', () => {
    renderTheme(<Menu links={linkMock} logoData={logoData} />);
    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling; // Pegando o irmão do botão
    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('Should not render links', () => {
    const { container } = renderTheme(
      <Menu links={linkMock} logoData={logoData} />,
    );
    const component = screen.queryByRole('navigation', {
      name: 'Main menu',
    }).firstChild;
    expect(component).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
