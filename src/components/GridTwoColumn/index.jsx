import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import { Container, TextContainer, ImageContainer, Image } from './styles';

export const GridTwoColumn = ({ title, text, srcImg, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <TextContainer>
          <Heading uppercase colorDark={!background}>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </TextContainer>
        <ImageContainer>
          <Image src={srcImg} alt={title} />
        </ImageContainer>
      </Container>
    </SectionBackground>
  );
};
