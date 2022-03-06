import Header from '../../organisms/Header';
import Heading from '../../organisms/Heading';
import Sidebar from '../../organisms/Sidebar';
import { Container } from './style';

type Props = {
  headingName: string;
  subHeadingName?: string;
  children?: React.ReactNode;
};
const DashboardTemplates = ({ headingName, subHeadingName, children }: Props) => {
  return (
    <Container>
      <Header />
      <Sidebar />
      <Heading headingName={headingName} subHeadingName={subHeadingName} />
      {children}
    </Container>
  );
};

export default DashboardTemplates;
