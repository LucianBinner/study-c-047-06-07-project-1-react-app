import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  > ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
    }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${theme.spacings.large};
`;

export const GridElement = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.2) rotate(10deg);
  }
`;
