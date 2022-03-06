import Image from 'next/image';
import { Container, Logo } from './style';

type Props = {
  svgName: string;
  alt: string;
  paddingLeftValue?: string;
};

const Menu = ({ svgName, alt, paddingLeftValue }: Props) => {
  return (
    <Container paddingLeftValue={paddingLeftValue}>
      <Image src={`/${svgName}`} alt={alt} height={43} width={34} />
      <Logo>{alt}</Logo>
    </Container>
  );
};

export default Menu;
