import Image from 'next/image';
import { Circle } from './style';

const EnclosureIcon = () => {
  return (
    <Circle>
      <Image src={`/bell.svg`} alt={`Bell`} height={15} width={15} />
    </Circle>
  );
};

export default EnclosureIcon;
