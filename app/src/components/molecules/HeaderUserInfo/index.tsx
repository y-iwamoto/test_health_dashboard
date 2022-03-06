import { rem } from 'polished';
import { cssVariables } from '../../../styles';
import { cssFontsize } from '../../../styles/cssFontsize';
import Circle from '../../atoms/Circle';
import Text from '../../atoms/Text';
import { Container, NameContainer } from './style';

const HeaderUserInfo = () => {
  return (
    <Container>
      <Circle diameter={rem('38.8px')} />
      <NameContainer>
        <Text fontWeight='bold' fontSize={cssFontsize.menu}>
          Ola Boluwatife
        </Text>
        <Text color={cssVariables.primaryColor}>PATIENT</Text>
      </NameContainer>
    </Container>
  );
};

export default HeaderUserInfo;
