import { useState } from 'react';
import Page from '../../atoms/Page';
import Text from '../../atoms/Text';
import { Container, PaginationContainer } from './style';

const PaginationSection = () => {
  const [activePage, setActivePage] = useState(1);
  const handleClick = (targetPage: number) => {
    console.warn('targetPage', targetPage);
    setActivePage(targetPage);
  };
  const paginationData = [
    { isArrow: true, value: '&lt;' },
    { isArrow: false, value: '1' },
    { isArrow: false, value: '2' },
    { isArrow: false, value: '3' },
    { isArrow: false, value: '...' },
    { isArrow: false, value: '10' },
    { isArrow: true, value: '&gt;' },
  ];
  return (
    <Container>
      <Text fontNoWrap={true}>Showing 1 to 8 of 40 items</Text>
      <PaginationContainer>
        {paginationData.map((page, index) => {
          return (
            <Page
              key={index}
              isActive={activePage === Number(page.value) ? true : false}
              isArrow={page.isArrow}
              value={page.value}
              handleClick={handleClick}
            />
          );
        })}
      </PaginationContainer>
    </Container>
  );
};
export default PaginationSection;
