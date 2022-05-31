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
import {AudioPlayer} from 'elements';
import useModalState from 'hooks/useModalState';
import colors from 'style/mode';

const Index: React.FC<{
  data: any;
}> = ({data}) => {
  const {colorMode} = useColorMode();
  const {isOpen, setOpen, setClose} = useModalState();

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
      <AudioPlayer url={data[0]?.url} isOpen={isOpen} onClose={setClose} />
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
            {data.map((item: any, k: number) => (
              <Tr>
                <Td>{item.createdAt}</Td>
                <Td>{item.service}</Td>
                <Td>{item.count}</Td>
                <Td>
                  <Button onClick={setOpen}>
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
