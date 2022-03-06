import { useState } from 'react';
import { Container, StyledButton } from './style';

const MultipleButton = () => {
  const [selectNumber, setSelectNumber] = useState<number>(1);
  const handleClick = (clickNumebr: number) => setSelectNumber(clickNumebr);
  return (
    <Container>
      <StyledButton onClick={() => handleClick(1)} selected={selectNumber === 1 ? true : false}>
        DAY
      </StyledButton>
      <StyledButton onClick={() => handleClick(2)} selected={selectNumber === 2 ? true : false}>
        WEEK
      </StyledButton>
      <StyledButton onClick={() => handleClick(3)} selected={selectNumber === 3 ? true : false}>
        MONTH
      </StyledButton>
    </Container>
  );
};

export default MultipleButton;
