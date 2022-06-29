import { renderTheme } from '../../styles/render-theme';
import App from '.';

describe('<Home />', () => {
  it('Should render home', () => {
    renderTheme(<App />);
  });
});
