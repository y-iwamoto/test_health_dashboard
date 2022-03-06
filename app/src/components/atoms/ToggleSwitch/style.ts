import styled from 'styled-components';
import { cssVariables } from '../../../styles';

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      & + span {
        background-color: #2196f3;

        &::before {
          transform: translateX(26px);
        }
      }
    }

    &:focus {
      & + span {
        box-shadow: 0 0 1px #2196f3;
      }
    }
  }
`;
export const CheckboxInput = styled.input``;
export const Toggle = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${cssVariables.baseColor};
    transition: 0.4s;
    border-radius: 50%;
  }
`;
