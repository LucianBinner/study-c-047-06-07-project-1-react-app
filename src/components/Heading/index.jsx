import { Title } from './styles';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'big',
  uppercase = false,
}) => {
  return (
    <Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </Title>
  );
};
