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
import usePosts from 'hooks/usePosts';
import React from 'react';
import {getFormatedDateFromTimeStamp} from 'util/utils';

const PlayButton: React.FC<{
  url: string;
}> = ({url}) => {
  const {isOpen, setOpen, setClose} = useModalState();
  return (
    <React.Fragment>
      {isOpen && <AudioPlayer url={url} isOpen={isOpen} onClose={setClose} />}
      <Button onClick={setOpen}>
        <DownloadIcon />
      </Button>
    </React.Fragment>
  );
};

const Index: React.FC<{
  data: any;
}> = ({data}) => {
  const {colorMode} = useColorMode();
  const {updatePosts} = usePosts();

  return (
    <React.Fragment>
      <TableContainer width={'100%'}>
        <Button onClick={updatePosts}>Reload</Button>
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
                <Td>{getFormatedDateFromTimeStamp(item.createdAt)}</Td>
                <Td>{item.service}</Td>
                <Td>{item.language}</Td>
                <Td>{item.gender}</Td>
                <Td>{item.voiceId}</Td>
                <Td>
                  <PlayButton url={item.url} />
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
