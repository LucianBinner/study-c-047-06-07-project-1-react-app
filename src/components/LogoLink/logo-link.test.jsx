import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';
import { screen } from '@testing-library/react';

describe('<LogoLink />', () => {
  it('Should render text render', () => {
    renderTheme(<LogoLink link="#target" text="Olá Mundo!" />);
    const heading = screen.getByRole('heading', { name: 'Olá Mundo!' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('Should render text render', () => {
    renderTheme(
      <LogoLink link="#target" text="Olá Mundo!" srcImage="image.jpg" />,
    );
    // const heading = screen.getByRole('heading', { name: 'Olá Mundo!' });
    // const image = heading.firstChild.firstChild;
    const image = screen.getByAltText('Olá Mundo!');
    expect(image).toHaveAttribute('src', 'image.jpg');
  });

  it('Should match snapchot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá Mundo!" srcImage="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
