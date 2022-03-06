import { rem } from 'polished';
import styled from 'styled-components';
import { cssVariables } from '../../../styles';
import { cssFontsize } from '../../../styles/cssFontsize';

export const Container = styled.div<{ paddingLeftValue?: string }>`
  display: flex;
  align-items: center;
  padding-left: ${(props) => (props.paddingLeftValue ? props.paddingLeftValue : 0)};
  column-gap: ${rem('22.7px')};
  margin-top: ${rem('52.5px')};

  &:last-child {
    margin-bottom: ${rem('52.5px')};
  }
`;

export const Logo = styled.p`
  font-size: ${cssFontsize.menu};
  color: ${cssVariables.baseColor};
`;
