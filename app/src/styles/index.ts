import { rem } from 'polished';
import { css } from 'styled-components';

export const cssVariables = {
  baseColor: '#343434',
  primaryColor: '#100DB1',
  emphasisColor: '#F80D38',
  imageBackgroundColor: '#D3D3D3',
  asideBackgroundColor: '#F7F7F7',
  formBorderColor: '#EDEDED',
  formBorderEmphasisColor: '#C5C5C5',
  tableBorderColor: '#E7E7E7',
};

export const MainHorizonMargin = css`
  margin-left: ${rem('19.4px')};
  margin-right: ${rem('24.6px')};
`;
