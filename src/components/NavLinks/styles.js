import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.nav`
  display: flex;
  flex-flow: row wrap;

  @media ${theme.media.lteMedium} {
    flex-flow: column wrap;
    align-content: center;
  }
`;
