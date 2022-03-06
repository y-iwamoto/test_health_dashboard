import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const Circle = styled.p`
  flex-grow: 1;
  width: ${rem('21.8px')};
  height: ${rem('21.8px')};
  border-radius: 50%;
  background-color: ${cssVariables.asideBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
