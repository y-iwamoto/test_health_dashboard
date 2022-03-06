import type { NextPage } from 'next';
import OverviewSection from '../components/organisms/Overview';
import DashboardTemplates from '../components/templates/Dashboard';

const Overview: NextPage = () => {
  return (
    <DashboardTemplates
      headingName='Welcome Boluwatife,'
      subHeadingName='How’re you feeling today?'
    >
      <OverviewSection />
    </DashboardTemplates>
  );
};

export default Overview;
