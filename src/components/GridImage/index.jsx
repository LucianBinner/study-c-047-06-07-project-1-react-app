import { Container, Grid, GridElement, Image } from './styles';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';

export const GridImage = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Grid>
          {grid.map((element, index) => (
            <GridElement key={index}>
              <Image src={element.srcImg} alt={element.altText} />
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};
