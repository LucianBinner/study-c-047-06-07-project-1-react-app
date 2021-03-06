import { SectionContainer } from '../SectionContainer';
import { Container } from './styles';

export const SectionBackground = ({ children, background }) => {
  return (
    <Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Container>
  );
};
