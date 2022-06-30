import { SectionContainer } from '../SelectionContainer';
import { Container } from './styles';

export const SectionBackground = ({ children, background }) => {
  return (
    <Container background={background}>
      <SectionContainer>
        <h1>{children}</h1>
      </SectionContainer>
    </Container>
  );
};
