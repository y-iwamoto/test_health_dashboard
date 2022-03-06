import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const StyledTable = styled.table`
  border: 1px solid ${cssVariables.tableBorderColor};
  border-radius: 5px;
  width: 100%;
  border-spacing: 0 ${rem('10.6px')};
  padding: ${rem('10.6px')} ${rem('21.5px')};
`;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const TR = styled.tr<{ width?: string }>`
  width: ${(props) => (props.width ? props.width : 'auto')};
`;

export const TH = styled.th<{ textAlign?: string }>`
  font-size: ${rem('8px')};
  font-weight: 600;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'center')};
`;

export const TD = styled.td<{ fontWeight?: number; color?: string; width?: string }>`
  font-size: ${rem('10px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
  color: ${(props) => (props.color ? props.color : cssVariables.baseColor)};
  text-align: center;
  width: ${(props) => props.width};
  border-top: 1px solid ${cssVariables.tableBorderColor};
  border-bottom: 1px solid ${cssVariables.tableBorderColor};
  padding: ${rem('11.5px')} 0;

  &:first-child {
    border-left: 1px solid ${cssVariables.tableBorderColor};
    border-radius: 5px 0 0 5px;
    padding-left: ${rem('21.5px')};
  }

  &:last-child {
    border-right: 1px solid ${cssVariables.tableBorderColor};
    border-radius: 0 5px 5px 0;
    padding-right: ${rem('21.5px')};
  }
`;
