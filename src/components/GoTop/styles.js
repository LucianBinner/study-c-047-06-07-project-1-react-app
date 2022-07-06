import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.a`
  position: fixed;
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  bottom: 2rem;
  right: 2rem;
  z-index: 6;
`;
