import { Input } from './style';

type Props = {
  placeholder: string;
  formWidth: string;
  paddingUpDown: string;
  formBorderColor: string;
};
const InputForm = ({ placeholder, formWidth, paddingUpDown, formBorderColor }: Props) => {
  return (
    <Input
      type='text'
      placeholder={placeholder}
      formWidth={formWidth}
      paddingUpDown={paddingUpDown}
      formBorderColor={formBorderColor}
    ></Input>
  );
};

export default InputForm;
