import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme, background }) => css`
    background: ${background};
    color: ${theme.colors.mainBg};
  `}
`;
