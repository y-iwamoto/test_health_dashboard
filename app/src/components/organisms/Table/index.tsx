import PaginationSection from '../../molecules/PaginationSection';
import PathologyResultTable from '../../molecules/PathologyResultTable';
import TableSelectForms from '../../molecules/TableSelectForms';
import { Container } from './style';

const Table = () => {
  return (
    <Container>
      <TableSelectForms />
      <PathologyResultTable />
      <PaginationSection />
    </Container>
  );
};

export default Table;
