import styled from 'styled-components';
import { cssVariables } from '../../../styles';
import { cssFontsize } from '../../../styles/cssFontsize';

export const StyledText = styled.p<{
  color?: string;
  fontWeight?: string;
  fontStyle?: string;
  fontSize?: string;
  fontNoWrap?: boolean;
}>`
  font-size: ${(props) => (props.fontSize ? props.fontSize : cssFontsize.normal)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : 'normal')};
  color: ${(props) => (props.color ? props.color : cssVariables.baseColor)};
  white-space: ${(props) => (props.fontNoWrap ? 'nowrap' : 'wrap')};
`;
