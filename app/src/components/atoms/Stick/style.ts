import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const Container = styled.div`
  flex-grow: 1;
`;
export const StyledStick = styled.div`
  height: ${rem('25.77px')};
  width: ${rem('1px')};
  background-color: ${cssVariables.imageBackgroundColor};
`;
