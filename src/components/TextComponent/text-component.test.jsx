import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
import { screen } from '@testing-library/react';

describe('<TextComponent />', () => {
  it('Should render', () => {
    renderTheme(<TextComponent>Content</TextComponent>);
    const component = screen.getByText('Content');
    expect(component).toBeInTheDocument();
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>Content</TextComponent>);
    expect(container.firstChild).toMatchSnapshot(); // Se o snapchot atual for diferente do anterior o teste será quebrado, para isso basta digitar u para gerar um novo snapchot
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
        font-weight: 400;
      }

      <div
        class="c0"
      >
        Content
      </div>
    `); // O snapchot acima é gerado automaticamente
  });
});
