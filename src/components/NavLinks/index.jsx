import { MenuLink } from '../MenuLink';
import { Container } from './styles';

export const NavLinks = ({ links = [] }) => {
  return (
    <Container aria-label="Main menu">
      {links.map((link) => {
        return <MenuLink key={link.link} {...link} />;
      })}
    </Container>
  );
};
