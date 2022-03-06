import { CheckboxInput, SwitchLabel, Toggle } from './style';

const ToggleSwitch = () => {
  return (
    <SwitchLabel>
      <CheckboxInput type='checkbox' />
      <Toggle />
    </SwitchLabel>
  );
};

export default ToggleSwitch;
