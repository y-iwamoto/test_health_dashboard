import { rem } from 'polished';
import styled from 'styled-components';
import { MainHorizonMargin } from '../../../styles';
export const Container = styled.section`
  grid-row: 2;
  grid-column: 2;
  margin-top: ${rem('28px')};
  ${MainHorizonMargin}
  margin-right: ${rem('36.9px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${rem('10px')};
`;

export const ContainerStyledImage = styled.div`
  margin-right: ${rem('19.4px')};
`;
