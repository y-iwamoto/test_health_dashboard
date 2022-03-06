import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const Input = styled.input<{
  formWidth: string;
  paddingUpDown: string;
  formBorderColor: string;
}>`
  font-family: 'FontAwesome', sans-serif;
  font-weight: normal;
  padding-top: ${(props) => (props.paddingUpDown ? props.paddingUpDown : 0)};
  padding-bottom: ${(props) => (props.paddingUpDown ? props.paddingUpDown : 0)};
  padding-left: ${rem('11px')};
  border-radius: 10px;
  border: 1px solid
    ${(props) => (props.formBorderColor ? props.formBorderColor : cssVariables.formBorderColor)};
  width: ${(props) => (props.formWidth ? props.formWidth : 0)};
`;
