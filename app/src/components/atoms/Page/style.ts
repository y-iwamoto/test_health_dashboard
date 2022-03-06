import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const StyledPage = styled.a<{ active?: boolean }>`
  color: black;
  float: left;
  width: ${rem('19.8px')};
  height: ${rem('19.8px')};
  text-align: center;
  padding: ${rem('1px')} ${rem('3px')};
  text-decoration: none;
  transition: background-color 0.3s;
  margin: 0 4px;

  &:hover {
    border: 1px solid ${cssVariables.tableBorderColor};
    border-radius: 50%;
    background-color: ${cssVariables.primaryColor};
    color: #fff;
  }
`;

export const ArrowPage = styled(StyledPage)`
  border: 1px solid ${cssVariables.tableBorderColor};
  border-radius: 50%;
`;

export const ActivePage = styled(StyledPage)`
  border: 1px solid ${cssVariables.tableBorderColor};
  border-radius: 50%;
  background-color: ${cssVariables.primaryColor};
  color: #fff;
`;
