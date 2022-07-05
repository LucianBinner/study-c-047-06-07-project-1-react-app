import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import { Container, Grid, GridElement } from './styles';

export const GridText = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading size="huge" uppercase colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Grid>
          {grid?.map((element, index) => (
            <GridElement key={index}>
              <Heading size="small" colorDark={!background}>
                {element.title}
              </Heading>
              <TextComponent>{element.description}</TextComponent>
            </GridElement>
          ))}
        </Grid>
      </Container>
    </SectionBackground>
  );
};
