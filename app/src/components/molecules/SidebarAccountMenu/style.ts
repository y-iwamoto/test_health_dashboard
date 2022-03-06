import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables } from '../../../styles';
import { cssFontsize } from '../../../styles/cssFontsize';

export const Container = styled.section`
  padding-left: ${rem('31.6px')};
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${rem('35px')};
  column-gap: ${rem('22.7px')};
`;

export const Logo = styled.p`
  font-size: ${cssFontsize.menu};
  color: ${cssVariables.baseColor};
`;
