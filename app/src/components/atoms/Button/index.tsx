import { StyledButton } from './style';

type Props = {
  borderRadius: string;
  backgroundColor: string;
  paddingUpDown: string;
  paddingHorizontal: string;
  color: string;
  children?: React.ReactNode;
};
const Button = ({
  borderRadius,
  backgroundColor,
  paddingUpDown,
  paddingHorizontal,
  color,
  children,
}: Props) => {
  return (
    <StyledButton
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      paddingHorizontal={paddingHorizontal}
      paddingUpDown={paddingUpDown}
      color={color}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
