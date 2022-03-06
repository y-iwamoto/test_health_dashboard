import { rem } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-shrink: 1;
  column-gap: ${rem('12px')};
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
