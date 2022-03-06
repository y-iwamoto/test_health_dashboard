import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  padding-top: ${rem('22px')};
  padding-bottom: ${rem('21.8px')};
  border-bottom: 1px solid ${cssVariables.imageBackgroundColor};
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${rem('8.4px')};
`;
