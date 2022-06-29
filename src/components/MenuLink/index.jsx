import { Container } from './styles';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Container href={link} target={target}>
      {children}
    </Container>
  );
};
