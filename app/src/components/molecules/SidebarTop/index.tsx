import Image from 'next/image';
import { Container, LogoSection } from './style';

const SidebarTop = () => {
  return (
    <Container>
      <LogoSection>
        <Image src='/main.svg' alt='main image' height={43} width={34} />
        <Image src='/logo.svg' alt='main image' height={30} width={70} />
      </LogoSection>
      <Image src='/arrows.svg' alt='main image' height={8} width={26} />
    </Container>
  );
};

export default SidebarTop;
