import {InfoOutlineIcon} from '@chakra-ui/icons';
import {Box, Heading, HStack, VStack} from '@chakra-ui/react';

const Footer = () => {
  return (
    <HStack
      bg={'black.primary'}
      justifyContent="space-between"
      p={'1% 10%'}
      h={300}
    >
      <VStack alignItems={'flex-start'}>
        <Heading color={'white.100'} fontSize={18}>
          Docs
        </Heading>
        <Heading color={'white.100'} fontSize={18}>
          About
        </Heading>
        <Heading color={'white.100'} fontSize={18}>
          Contribute
        </Heading>
      </VStack>
      <HStack spacing={10}>
        <InfoOutlineIcon color={'yellow.100'} w={8} h={8} />
        <InfoOutlineIcon color={'yellow.100'} w={8} h={8} />
        <InfoOutlineIcon color={'yellow.100'} w={8} h={8} />
      </HStack>
      <Box>
        <Heading color={'white.100'} fontSize={15}>
          Made By Rehan
        </Heading>
      </Box>
    </HStack>
  );
};

export default Footer;
