import { Heading } from '../../components/Heading';
import { Wrapper } from './styles';

const App = () => {
  return (
    <>
      <Heading>Header</Heading>
      <Wrapper background="blue">
        <h1>Hello World!</h1>
      </Wrapper>
    </>
  );
};

export default App;
