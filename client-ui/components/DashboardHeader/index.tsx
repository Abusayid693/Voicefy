import {Heading, HStack, useColorMode, VStack} from '@chakra-ui/react';
import colors from 'style/mode';

const Index = () => {
  const {colorMode} = useColorMode();
  return (
    <HStack
      bg={colors.fgd_2[colorMode]}
      top={0}
      p={5}
      marginLeft={'-8px'}
      marginBottom={10}
    >
      <VStack alignItems={'flex-start'}>
        <Heading color={colors.fgd_3[colorMode]} fontSize={25}>
          Welcome, Rehan
        </Heading>
        <Heading color={colors.fgd_3[colorMode]} fontWeight={400} fontSize={15}>
          Here's what's happening in your account today
        </Heading>
      </VStack>
    </HStack>
  );
};

export default Index;
