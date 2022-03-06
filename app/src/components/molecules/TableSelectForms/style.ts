import { rem } from 'polished';
import styled from 'styled-components';
import MultipleButton from '../../atoms/MultipleButton';
import Text from '../../atoms/Text';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${rem('19.8px')};
  width: 100%;
`;

export const TableSelectFormsText = styled(Text)<{ width: string }>`
  width: ${(props) => props.width};
`;

export const TableSelectFormsMultipleButton = styled(MultipleButton)<{ width: string }>`
  width: ${(props) => props.width};
`;
