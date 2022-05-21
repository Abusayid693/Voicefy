import {CloudDownload20} from '@carbon/icons-react';
import {DownloadIcon} from '@chakra-ui/icons';
import {
  Button,
  Heading,
  HStack,
  Select,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorMode,
  VStack
} from '@chakra-ui/react';
import colors from 'style/mode';

const tableData = [
  {
    date: '01-04-20',
    service: 'AWS',
    count: '14',
    download: '',
    play: ''
  },
  {
    date: '01-04-20',
    service: 'AWS',
    count: '14',
    download: '',
    play: ''
  },
  {
    date: '01-04-20',
    service: 'AWS',
    count: '14',
    download: '',
    play: ''
  },
  {
    date: '01-04-20',
    service: 'AWS',
    count: '14',
    download: '',
    play: ''
  }
];

const Index = () => {
  const {colorMode} = useColorMode();
  return (
    <VStack width={'100%'} bg={colors.fgd_2[colorMode]} p={2} borderRadius={5}>
      <HStack mb={5} w="100%" justifyContent={'space-between'}>
        <Heading fontSize={22} fontWeight={500}>
          Saved
        </Heading>
        <HStack w="30%">
          <Select placeholder="Select option" size={'sm'}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="Select option" size={'sm'}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </HStack>
      </HStack>

      <TableContainer width={'100%'}>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>service</Th>
              <Th>count</Th>
              <Th>download</Th>
              <Th>play</Th>
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((item, k: number) => (
              <Tr>
                <Td>{item.date}</Td>
                <Td>{item.count}</Td>
                <Td>{item.service}</Td>

                <Td>
                  <Button>
                    <DownloadIcon />
                  </Button>
                </Td>

                <Td>
                  <Button>
                    <CloudDownload20 />
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
              <Th>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default Index;
