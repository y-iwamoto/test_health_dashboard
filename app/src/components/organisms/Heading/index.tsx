import Image from 'next/image';
import { cssVariables } from '../../../styles';
import { cssFontsize } from '../../../styles/cssFontsize';
import Text from '../../atoms/Text';
import ToggleSwitch from '../../atoms/ToggleSwitch';
import { Container, ContainerStyledImage, SubContainer, TextContainer } from './style';

type Props = {
  headingName: string;
  subHeadingName?: string;
};

const Heading = ({ headingName, subHeadingName }: Props) => {
  return (
    <Container>
      <TextContainer>
        <Text color={cssVariables.emphasisColor} fontSize={cssFontsize.title} fontWeight='bold'>
          {headingName}
        </Text>
        {subHeadingName ? <Text fontSize={cssFontsize.subtitle}>{subHeadingName}</Text> : null}
      </TextContainer>
      <SubContainer>
        <ContainerStyledImage>
          <Image src='/sun.svg' alt='sun' width={16.5} height={16.5} />
        </ContainerStyledImage>
        <ToggleSwitch />
        <Text>Apply Dark Theme</Text>
      </SubContainer>
    </Container>
  );
};

export default Heading;
