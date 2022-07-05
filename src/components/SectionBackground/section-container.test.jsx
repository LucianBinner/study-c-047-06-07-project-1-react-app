import { renderTheme } from '../../styles/render-theme';
import { SectionBackground } from '.';
import { screen } from '@testing-library/react';

describe('<SectionBackground />', () => {
  it('Should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    const component = screen.getByRole('heading');
    expect(component).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('Should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );
    const component = screen.getByRole('heading');
    expect(component).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
