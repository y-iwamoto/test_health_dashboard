import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
  border-top: 1px solid ${cssVariables.imageBackgroundColor};
  padding: ${rem('27.3px')} 0;
`;

export const TellInfos = styled.div`
  display: flex;
  flex-direction: column;
`;
