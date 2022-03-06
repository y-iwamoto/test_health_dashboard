import Menu from '../../atoms/Menu';
import { Container } from './style';

const SidebarMenu = () => {
  return (
    <Container>
      <Menu svgName='overview.svg' alt='Overview' />
      <Menu svgName='appointment.svg' alt='Appointments' />
      <Menu svgName='doctor.svg' alt='Doctors' />
      <Menu svgName='pathology.svg' alt='Pathology Results' />
      <Menu svgName='chat.svg' alt='Chats' />
    </Container>
  );
};

export default SidebarMenu;
