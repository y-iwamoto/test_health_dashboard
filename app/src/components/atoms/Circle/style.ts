import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const StyledCircle = styled.p<{ diameter: string }>`
  width: ${rem('38.8px')};
  height: ${rem('38.8px')};
  border-radius: 50%;
  background-color: ${cssVariables.imageBackgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
