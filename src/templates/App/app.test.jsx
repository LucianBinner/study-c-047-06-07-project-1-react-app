import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import App from '.';

test('Renders learn react link', () => {
  renderTheme(<App />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello World!',
  }).parentElement;
  expect(headingContainer).toHaveStyle({
    background: 'blue',
  });
  expect(headingContainer).toMatchSnapshot(); // Faz snapchot do elemento testado
  expect(headingContainer).toHaveStyleRule('background', 'blue');
});
