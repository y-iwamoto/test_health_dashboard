import { rem } from 'polished';
import { cssVariables } from '../../../styles';
import { cssFontsize } from '../../../styles/cssFontsize';
import InputForm from '../../atoms/InputForm';
import SelectForm from '../../atoms/SelectForm';
import { Container, TableSelectFormsMultipleButton, TableSelectFormsText } from './style';

const TableSelectForms = () => {
  return (
    <Container>
      <TableSelectFormsText width={'5%'} fontWeight='bold' fontSize={cssFontsize.tagText}>
        SHOW
      </TableSelectFormsText>
      <SelectForm
        options={[
          { value: '9', label: '9' },
          { value: '10', label: '10' },
          { value: '11', label: '11' },
          { value: '12', label: '12' },
        ]}
        initialValue={'12'}
        formWidth={'8%'}
      />
      <SelectForm
        options={[
          { value: '10', label: 'This month: October' },
          { value: '11', label: 'This month: November' },
          { value: '12', label: 'This month: December' },
        ]}
        initialValue={'10'}
        formWidth={'22%'}
      />
      <InputForm
        placeholder='&#xf002; Search doctors by name or title'
        formWidth={'30%'}
        paddingUpDown={rem('8.5px')}
        formBorderColor={cssVariables.formBorderColor}
      />

      <TableSelectFormsMultipleButton width={'35%'} />
    </Container>
  );
};

export default TableSelectForms;
