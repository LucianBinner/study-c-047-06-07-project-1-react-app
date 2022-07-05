import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { Title } from '../Heading/styles';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: ${theme.spacings.large};

  @media ${theme.media.lteMedium} {
    grid-template-columns: 1fr;
    text-align: center;
  }

  ${Title} {
    margin-bottom: ${theme.spacings.large};
  }
`;

export const TextContainer = styled.div`
  @media ${theme.media.lteMedium} {
    margin-bottom: ${theme.spacings.large};
  }
`;

export const ImageContainer = styled.div``;

export const Image = styled.img``;
