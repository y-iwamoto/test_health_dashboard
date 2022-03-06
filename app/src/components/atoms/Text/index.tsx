import { StyledText } from './style';

type Props = {
  color?: string;
  fontWeight?: string;
  fontStyle?: string;
  fontSize?: string;
  fontNoWrap?: boolean;
  children?: React.ReactNode;
};
const Text = ({ color, fontWeight, fontStyle, fontSize, fontNoWrap, children }: Props) => {
  return (
    <StyledText
      color={color}
      fontWeight={fontWeight}
      fontStyle={fontStyle}
      fontSize={fontSize}
      fontNoWrap={fontNoWrap}
    >
      {children}
    </StyledText>
  );
};

export default Text;
