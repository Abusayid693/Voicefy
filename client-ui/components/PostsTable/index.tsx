import {CloudDownload20} from '@carbon/icons-react';
import {DownloadIcon} from '@chakra-ui/icons';
import {
  Button,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorMode
} from '@chakra-ui/react';
import {AudioPlayer} from 'elements';
import useModalState from 'hooks/useModalState';
import React from 'react';

const Index: React.FC<{
  data: any;
}> = ({data}) => {
  const {colorMode} = useColorMode();
  const {isOpen, setOpen, setClose} = useModalState();

  return (
    <React.Fragment>
      <AudioPlayer url={data[0]?.url} isOpen={isOpen} onClose={setClose} />
      <TableContainer width={'100%'}>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>service</Th>
              <Th>language</Th>
              <Th>gender</Th>
              <Th>voiceId</Th>
              <Th>download</Th>
              <Th>play</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item: any, k: number) => (
              <Tr>
                <Td>{item.createdAt}</Td>
                <Td>{item.service}</Td>
                <Td>{item.language}</Td>
                <Td>{item.gender}</Td>
                <Td>{item.voiceId}</Td>
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
    </React.Fragment>
  );
};

export default Index;
