import type { NextPage } from 'next';
import Table from '../components/organisms/Table';
import DashboardTemplates from '../components/templates/Dashboard';

const PathologyResults: NextPage = () => {
  return (
    <DashboardTemplates headingName='Pathology Results'>
      <Table />
    </DashboardTemplates>
  );
};

export default PathologyResults;
