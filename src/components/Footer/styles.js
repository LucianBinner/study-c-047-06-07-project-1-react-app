import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.div`
  text-align: center;
  border-top: 0.1rem solid ${theme.colors.mediumGray};

  a {
    color: inherit;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
  }

  & ${TextComponent} {
      font-size: ${theme.font.sizes.small};
    }

  & ${SectionContainer} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
