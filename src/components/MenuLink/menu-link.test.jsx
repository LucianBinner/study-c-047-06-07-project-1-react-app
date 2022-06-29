import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';
import { screen } from '@testing-library/react';

describe('<MenuLink />', () => {
  it('Should render a link', () => {
    renderTheme(<MenuLink link="http://localhost">Content</MenuLink>);
    const component = screen.getByRole('link', { name: 'Content' });
    expect(component).toHaveAttribute('target', '_self');
  });

  it('Should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="http://localhost" newTab>
        Content
      </MenuLink>,
    );
    const component = screen.getByRole('link', { name: 'Content' });
    expect(component).toHaveAttribute('target', '_blank');
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(
      <MenuLink link="http://localhost">Content</MenuLink>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: block;
        -webkit-text-decoration: none;
        text-decoration: none;
        font-size: 1.6rem;
        padding: 1.6rem;
        color: #0a1128;
        position: relative;
      }

      .c0::after {
        content: '';
        position: absolute;
        bottom: 0.75rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: #dc143c;
        -webkit-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
      }

      .c0:hover::after {
        left: 25%;
        width: 50%;
      }

      <a
        class="c0"
        href="http://localhost"
        target="_self"
      >
        Content
      </a>
    `);
  });
});
