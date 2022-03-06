import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const Container = styled.div``;

export const Select = styled.select<{ width: string }>`
  padding-top: ${rem('9px')};
  padding-bottom: ${rem('9px')};
  padding-left: ${rem('8px')};
  border: 1px solid ${cssVariables.formBorderColor};
  border-radius: 5px;
  width: ${(props) => props.width};
`;
