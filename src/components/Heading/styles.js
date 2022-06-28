import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Title = styled.h1`
    color: ${(props) =>
      props.fontLight ? theme.colors.white : theme.colors.primaryColor}
`;
