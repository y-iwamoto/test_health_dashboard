import { ActivePage, ArrowPage, StyledPage } from './style';

type Props = {
  isArrow: boolean;
  isActive: boolean;
  value: string;
  handleClick: (targetPage: number) => void;
};
const Page = ({ isArrow, isActive, value, handleClick }: Props) => {
  if (isArrow) {
    return value === '&lt;' ? (
      <ArrowPage href='#'>&lt;</ArrowPage>
    ) : (
      <ArrowPage href='#'>&gt;</ArrowPage>
    );
  } else if (isActive) {
    return <ActivePage onClick={() => handleClick(Number(value))}>{value}</ActivePage>;
  } else if (isNaN(parseInt(value))) {
    return <StyledPage>{value}</StyledPage>;
  } else {
    return <StyledPage onClick={() => handleClick(Number(value))}>{value}</StyledPage>;
  }
};

export default Page;
