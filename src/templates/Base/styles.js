import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  padding-top: 5.4rem;
  width: 100%;

  @media ${theme.media.lteMedium} {
    padding-top: 0;
  }
`;
