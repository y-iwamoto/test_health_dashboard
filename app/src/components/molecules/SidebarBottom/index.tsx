import Image from 'next/image';
import { cssVariables } from '../../../styles';
import { cssFontsize } from '../../../styles/cssFontsize';
import Text from '../../atoms/Text';
import { Container, TellInfos } from './style';

const SidebarBottom = () => {
  return (
    <Container>
      <Image src='/tel.svg' alt='tel image' height={32} width={27} />
      <TellInfos>
        <Text color={cssVariables.emphasisColor} fontStyle='italic' fontSize={cssFontsize.menu}>
          Emergency Hotlines:
        </Text>
        <Text>+234 92 928 2891 +234 60 621 2098</Text>
      </TellInfos>
    </Container>
  );
};
export default SidebarBottom;
