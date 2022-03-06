import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables, MainHorizonMargin } from '../../../styles';

export const Container = styled.header`
  background-color: ${cssVariables.asideBackgroundColor};
  grid-row: 1;
  grid-column: 2;
  ${MainHorizonMargin}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${rem('24.9px')};
  padding-right: ${rem('30.1px')};
  border-radius: 15px;
`;
