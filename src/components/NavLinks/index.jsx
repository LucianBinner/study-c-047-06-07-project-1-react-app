import { MenuLink } from '../MenuLink';
import { Container } from './styles';

export const NavLinks = ({ links = [] }) => {
  return (
    <Container>
      {links.map((link) => {
        return <MenuLink key={link.link} {...link} />;
      })}
    </Container>
  );
};
