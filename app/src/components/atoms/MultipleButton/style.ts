import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const Container = styled.div`
  display: flex;
`;

export const StyledButton = styled.button<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? cssVariables.emphasisColor : '#fff')};
  border: 1px solid ${cssVariables.formBorderColor};
  color: ${(props) => (props.selected ? '#fff' : cssVariables.baseColor)};
  padding: ${rem('8.5px')} ${rem('40px')};
  cursor: pointer;

  &:first-child {
    border-radius: 10px 0 0 10px;
  }

  &:last-child {
    border-radius: 0 10px 10px 0;
  }

  &:not(:last-child) {
    border-right: none;
  }
`;
