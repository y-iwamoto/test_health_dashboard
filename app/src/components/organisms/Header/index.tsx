import Stick from '../../atoms/Stick';
import EnclosureIcon from '../../molecules/EnclosureIcon';
import HeaderUserInfo from '../../molecules/HeaderUserInfo';
import SearchForm from '../../molecules/SearchForm';
import { Container } from './style';

const Header = () => {
  return (
    <Container>
      <SearchForm />
      <EnclosureIcon />
      <Stick />
      <HeaderUserInfo />
    </Container>
  );
};
export default Header;
