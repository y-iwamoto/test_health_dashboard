import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${rem('26.4px')};
  padding-bottom: ${rem('24.6px')};
`;

export const PaginationContainer = styled.div`
  display: flex;
  padding: ${rem('8px')} ${rem('2px')};
  border: 1px solid ${cssVariables.tableBorderColor};
  border-radius: 20px;
`;
