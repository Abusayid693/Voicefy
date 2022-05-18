import {Asleep20, Logout20} from '@carbon/icons-react';
import {
  Avatar,
  AvatarBadge,
  Button,
  HStack,
  Text,
  useColorMode,
  VStack
} from '@chakra-ui/react';
import ThemeToggle from 'components/ThemeSwitch';
import colors from 'style/mode';

const Index = () => {
  const {colorMode} = useColorMode();

  return (
    <VStack
      bg={colors.fgd_5[colorMode]}
      w={'200px'}
      h={'100vh'}
      position={'relative'}
    >
      <VStack marginBottom="10vh" marginTop={'5vh'}>
        <ThemeToggle />
      </VStack>
      <VStack marginBottom="70vh">
        <Button
          aria-label=""
          rightIcon={<Asleep20 />}
          bg={colors.fgd_6[colorMode]}
          color={colors.fgd_3[colorMode]}
          w={'180px'}
          _hover={{
            bg: colors.fgd_6[colorMode]
          }}
        >
          Voices
        </Button>
        <Button
          aria-label=""
          rightIcon={<Asleep20 />}
          bg={colors.fgd_6[colorMode]}
          color={colors.fgd_3[colorMode]}
          w={'180px'}
          _hover={{
            bg: colors.fgd_6[colorMode]
          }}
        >
          Voices
        </Button>

        <Button
          aria-label=""
          rightIcon={<Asleep20 />}
          bg={colors.fgd_6[colorMode]}
          color={colors.fgd_3[colorMode]}
          w={'180px'}
          _hover={{
            bg: colors.fgd_6[colorMode]
          }}
        >
          Voices
        </Button>

        <Button
          aria-label=""
          rightIcon={<Asleep20 />}
          bg={colors.fgd_6[colorMode]}
          color={colors.fgd_3[colorMode]}
          w={'180px'}
          _hover={{
            bg: colors.fgd_6[colorMode]
          }}
        >
          Voices
        </Button>
      </VStack>
      <VStack position={'absolute'} bottom="30">
        <HStack w={'180px'} marginBottom={4}>
          <Avatar size="sm">
            <AvatarBadge boxSize="0.85em" bg="green.500" />
          </Avatar>
          <VStack
            alignItems={'flex-start'}
            justifyContent="flex-start"
            textAlign={'left'}
          >
            <Text lineHeight={1}>Rehan</Text>
            <Text fontSize={10} lineHeight={0}>
              Rehan
            </Text>
          </VStack>
        </HStack>
        <Button
          aria-label=""
          rightIcon={<Logout20 />}
          bg={colors.fgd_6[colorMode]}
          color={colors.fgd_3[colorMode]}
          w={'180px'}
          _hover={{
            bg: colors.fgd_6[colorMode]
          }}
        >
          Logout
        </Button>
      </VStack>
    </VStack>
  );
};

export default Index;
