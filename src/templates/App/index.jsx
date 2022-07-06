import { Base } from '../Base';
import mock from '../Base/mock';
import { Container } from './styles';

const App = () => {
  return (
    <Container>
      <Base {...mock} />
    </Container>
  );
};

export default App;
