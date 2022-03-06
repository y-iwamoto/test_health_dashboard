import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const Container = styled.aside`
  background-color: ${cssVariables.asideBackgroundColor};
  grid-row: 1 / span 3;
  grid-column: 1;
  border-radius: 20px;
`;
