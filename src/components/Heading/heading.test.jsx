import { renderTheme } from '../../styles/render-theme';
import { Heading } from './index';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';

describe('<Heading />', () => {
  it('Should render with default values', () => {
    renderTheme(<Heading>Any Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Any Text' }); // Pega o componente ou elemento html através de seu conteudo
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xlarge,
      'text-transform': 'none',
    });
  });

  it('Should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Any Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Any Text' });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('Should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Any Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Any Text' });
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
    rerender(
      // Rerenderizando o componente
      <ThemeProvider theme={theme}>
        <Heading size="medium">Any Text</Heading>
      </ThemeProvider>,
    );
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
    rerender(
      // Rerenderizando o componente
      <ThemeProvider theme={theme}>
        <Heading size="big">Any Text</Heading>
      </ThemeProvider>,
    );
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });
    rerender(
      // Rerenderizando o componente
      <ThemeProvider theme={theme}>
        <Heading size="huge">Any Text</Heading>
      </ThemeProvider>,
    );
    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('Should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">Any Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Any Text' });
    expect(heading).toHaveStyleRule('font-size', theme.font.sizes.xlarge, {
      media: theme.media.lteMedium, // Altera uma propriedade CSS, neste caso estamos alterando uma media query para que o teste passe
    });
  });

  it('Should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>Any Text</Heading>);
    const heading = screen.getByRole('heading', { name: 'Any Text' });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('Should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Any Text</Heading>);
    const h6 = container.querySelector('h6'); // Pegando um elemento html apartir do seu container
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
