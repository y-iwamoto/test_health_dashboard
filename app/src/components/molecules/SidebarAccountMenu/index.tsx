import { cssFontsize } from '../../../styles/cssFontsize';
import Menu from '../../atoms/Menu';
import Text from '../../atoms/Text';
import { Container } from './style';

const SidebarAccountMenu = () => {
  return (
    <Container>
      <Text fontWeight='bold' fontSize={cssFontsize.menu}>
        ACCOUNT
      </Text>
      <Menu svgName='settings.svg' alt='Settings' paddingLeftValue='5.4px' />
      <Menu svgName='logout.svg' alt='Logout' paddingLeftValue='5.4px' />
    </Container>
  );
};

export default SidebarAccountMenu;
