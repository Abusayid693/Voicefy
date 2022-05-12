import {ExternalLinkIcon, InfoIcon} from '@chakra-ui/icons';
import {Box, Heading} from '@chakra-ui/react';

const EditorHeading: React.FC = () => {
  return (
    <Box
      display={'flex'}
      alignItems="center"
      flexDirection={'column'}
      bg="black.200"
      borderTopRightRadius={10}
      borderTopLeftRadius={10}
      pt={9}
      pb={9}
      position="relative"
    >
      <ExternalLinkIcon
        h={4}
        w={4}
        color="grey.200"
        position={'absolute'}
        top={5}
        right={5}
      />
      <InfoIcon
        h={4}
        w={4}
        color="grey.200"
        position={'absolute'}
        top={5}
        right={12}
      />
      <Heading color={'white.100'}>
        Convert Text to Speech using our editor
      </Heading>
      <Heading color={'white.100'} fontSize={25} fontWeight={300}>
        Watson Text to Speech Voices
      </Heading>
    </Box>
  );
};

export default EditorHeading;
