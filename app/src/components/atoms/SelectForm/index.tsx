import { Select } from './style';

type Props = {
  options: Array<{ value: string; label: string }>;
  initialValue: string;
  formWidth: string;
};
const SelectForm = ({ options, initialValue, formWidth }: Props) => {
  return (
    <Select width={formWidth} defaultValue={initialValue}>
      {options.map((op) => {
        return (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectForm;
