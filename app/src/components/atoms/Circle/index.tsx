import { StyledCircle } from './style';

type Props = {
  diameter: string;
};
const Circle = ({ diameter }: Props) => {
  return <StyledCircle diameter={diameter} />;
};

export default Circle;
