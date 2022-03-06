import 'font-awesome/css/font-awesome.min.css';
import { rem } from 'polished';
import { cssVariables } from '../../../styles';
import InputForm from '../../atoms/InputForm';
import { Container } from './style';

const SearchForm = () => {
  return (
    <Container>
      <InputForm
        placeholder='&#xf002; Search pathology results'
        formWidth={'100%'}
        paddingUpDown={rem('14px')}
        formBorderColor={cssVariables.formBorderEmphasisColor}
      />
    </Container>
  );
};

export default SearchForm;
