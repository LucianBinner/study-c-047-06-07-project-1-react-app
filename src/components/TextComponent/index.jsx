import { Container } from './styles';

export const TextComponent = ({ children }) => {
  return <Container dangerouslySetInnerHTML={{ __html: children }} />;
};
