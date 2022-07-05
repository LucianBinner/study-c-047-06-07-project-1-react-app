import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
  }
`;
