import { renderTheme } from '../../styles/render-theme';
import { SectionBackground } from '.';
import { screen } from '@testing-library/react';

describe('<SectionBackground />', () => {
  it('Should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>Content</SectionBackground>,
    );
    const component = screen.getByRole('heading');
    expect(component).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('Should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground>Content</SectionBackground>,
    );
    const component = screen.getByRole('heading');
    expect(component).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
