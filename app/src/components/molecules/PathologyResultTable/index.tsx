import { rem } from 'polished';
import { cssVariables } from '../../../styles';
import Button from '../../atoms/Button';
import Circle from '../../atoms/Circle';
import { StyledTable, TBody, TD, TH, THead, TR } from './style';

const results = [
  {
    id: 1,
    name: 'Dr. Ibrahim Yekeni',
    file: 'Malaria Infection Treatment',
    time: '2:00PM',
    isAction: false,
  },
  {
    id: 2,
    name: 'Dr. Ebuka Kelechi',
    file: 'Transcend',
    time: '5:00AM',
    isAction: false,
  },
  {
    id: 3,
    name: 'Dr. Kemi Olowojeje',
    file: 'Covid 19 Test',
    time: '4:00PM',
    isAction: false,
  },
  {
    id: 4,
    name: 'Dr. Michael Stwart',
    file: 'Pregnancy Test',
    time: '8:00PM',
    isAction: true,
  },
  {
    id: 5,
    name: 'Dr. Scut Tom',
    file: 'Bacteria Infection Treatment',
    time: '11:00AM',
    isAction: false,
  },
  {
    id: 6,
    name: 'Dr. Amina Ahmed ',
    file: 'Heart Test',
    time: '3:00PM',
    isAction: false,
  },
  {
    id: 7,
    name: 'Dr. Banabas Paul',
    file: 'Blood Pressure',
    time: '10:40AM',
    isAction: false,
  },
  {
    id: 8,
    name: 'Dr. Ayo Jones',
    file: 'Sugar Test',
    time: '8:30AM',
    isAction: false,
  },
];
const PathologyResultTable = () => {
  return (
    <StyledTable>
      <THead>
        <TR>
          <TH colSpan={2} textAlign={'left'}>
            DOCTOR
          </TH>
          <TH>FILE</TH>
          <TH>TIME</TH>
          <TH>ACTION</TH>
          <TH></TH>
        </TR>
      </THead>
      <TBody>
        {results.map((result) => (
          <TR key={result.id}>
            <TD width='10%'>
              <Circle diameter={rem('47.2px')} />
            </TD>
            <TD width='10%' fontWeight={600}>
              {result.name}
            </TD>
            <TD width='25%'>{result.file}</TD>
            <TD width='30%' color={cssVariables.emphasisColor} fontWeight={600}>
              {result.time}
            </TD>
            <TD width='20%'>
              <Button
                borderRadius={'5px'}
                backgroundColor={result.isAction ? cssVariables.primaryColor : '#fff'}
                paddingUpDown={rem('5.2px')}
                paddingHorizontal={rem('17px')}
                color={result.isAction ? '#fff' : cssVariables.baseColor}
              >
                VIEW RESULT
              </Button>
            </TD>
            <TD width='5%'>･･･</TD>
          </TR>
        ))}
      </TBody>
    </StyledTable>
  );
};

export default PathologyResultTable;
