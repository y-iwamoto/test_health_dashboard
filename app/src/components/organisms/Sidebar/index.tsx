import SidebarAccountMenu from '../../molecules/SidebarAccountMenu';
import SidebarBottom from '../../molecules/SidebarBottom';
import SidebarMenu from '../../molecules/SidebarMenu';
import SidebarTop from '../../molecules/SidebarTop';
import { Container } from './style';

const Sidebar = () => {
  return (
    <Container>
      <SidebarTop />
      <SidebarMenu />
      <SidebarAccountMenu />
      <SidebarBottom />
    </Container>
  );
};

export default Sidebar;
