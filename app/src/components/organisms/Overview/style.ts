import { rem } from 'polished';
import styled from 'styled-components';
import { MainHorizonMargin } from '../../../styles';

export const Container = styled.aside`
  grid-row: 3;
  grid-column: 2;
  ${MainHorizonMargin}
  margin-top: ${rem('14px')};
`;
