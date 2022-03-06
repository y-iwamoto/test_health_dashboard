import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const StyledButton = styled.button<{
  borderRadius: string;
  backgroundColor: string;
  paddingUpDown: string;
  paddingHorizontal: string;
  color: string;
}>`
  border: 1px solid ${cssVariables.tableBorderColor};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#fff')};
  padding: ${(props) => props.paddingUpDown} ${(props) => props.paddingHorizontal};
  color: ${(props) => (props.color ? props.color : cssVariables.baseColor)};
`;
