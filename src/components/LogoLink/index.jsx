import { Heading } from '../Heading';
import { Container } from './styles';

export const LogoLink = ({ text, srcImage = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Container href={link}>
        {srcImage ? <img src={srcImage} alt={text} /> : text}
      </Container>
    </Heading>
  );
};
