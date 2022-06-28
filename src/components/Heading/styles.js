import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

const titleSize = {
  small: () => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: () => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: () => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: () => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)};
  `,
};

const mediaFont = () => css`
  @media ${theme.media.lteMedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  color: ${(props) =>
    props.colorDark ? theme.colors.primaryColor : theme.colors.white};

  ${({ size }) => titleSize[size]()}
  ${({ uppercase }) => titleCase(uppercase)}
`;
