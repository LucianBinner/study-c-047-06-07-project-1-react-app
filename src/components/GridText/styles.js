import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${TextComponent} {
    margin-bottom: ${theme.spacings.large};
  }
`;

export const Grid = styled.div`
  counter-reset: grid-counter;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${theme.spacings.large};

  @media ${theme.media.lteMedium} {
    grid-template-columns: 1fr;
  }
`;

export const GridElement = styled.div`
  ${HeadingContainer} {
    position: relative;
    left: 5rem;
  }
  ${HeadingContainer}::before {
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;
    font-size: 7rem;
    top: -3rem;
    left: -5rem;
    transform: rotate(5deg)
  }
`;
