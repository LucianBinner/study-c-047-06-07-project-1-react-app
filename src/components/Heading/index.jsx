import { Title } from './styles';

export const Heading = ({ children, fontLight }) => {
  return <Title fontLight={fontLight}>{children}</Title>;
};
