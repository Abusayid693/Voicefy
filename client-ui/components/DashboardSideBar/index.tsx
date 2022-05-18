import {
  Dashboard20,
  DashboardReference20,
  FolderMoveTo20,
  Logout20,
  TableOfContents20
} from '@carbon/icons-react';
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  HStack,
  Text,
  useColorMode,
  VStack
} from '@chakra-ui/react';
import ThemeToggle from 'components/ThemeSwitch';
import Link from 'next/link';
import {ReactNode} from 'react';
import colors from 'style/mode';

const routes = [
  {
    name: 'Dashboard',
    icon: <DashboardReference20 />,
    routeTo: '/dashboard'
  },

  {
    name: 'Saved',
    icon: <FolderMoveTo20 />,
    routeTo: '/dashboard/saved'
  },
  {
    name: 'Analytics',
    icon: <Dashboard20 />,
    routeTo: '/dashboard/analytics'
  },
  {
    name: 'Voices',
    icon: <TableOfContents20 />,
    routeTo: '/dashboard/voices'
  }
];

const Index: React.FC<{
  activeIndex: number;
  children: ReactNode;
}> = ({activeIndex = 0, children}) => {
  const {colorMode} = useColorMode();

  return (
    <HStack justifyContent={'space-between'} bg={colors.fgd_5[colorMode]}>
      <VStack
        bg={colors.fgd_5[colorMode]}
        w={'200px'}
        h={'100vh'}
        position={'relative'}
      >
        <VStack marginBottom="5vh" marginTop={'5vh'}>
          <ThemeToggle />
        </VStack>
        <VStack marginBottom="70vh">
          <Text fontSize={15} fontWeight={300} alignSelf={'self-start'}>
            MENU
          </Text>
          {routes.map((item, index) => (
            <Link href={item.routeTo}>
              <Button
                key={item.name}
                aria-label={`${index}`}
                leftIcon={item.icon}
                bg={colors.fgd_6[colorMode]}
                borderRadius={0}
                fontSize={14}
                justifyContent="space-between"
                color={
                  activeIndex === index
                    ? colors.fgd_3[colorMode]
                    : colors.fgd_7[colorMode]
                }
                w={'180px'}
                borderLeftWidth={2}
                borderColor={
                  activeIndex === index
                    ? colors.fgd_3[colorMode]
                    : colors.fgd_6[colorMode]
                }
                _hover={{
                  bg: colors.fgd_6[colorMode]
                }}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </VStack>
        <VStack position={'absolute'} bottom="30">
          <Text fontSize={15} fontWeight={300} alignSelf={'self-start'}>
            PROFILE
          </Text>
          <HStack
            w={'180px'}
            marginBottom={4}
            _hover={{
              bg: colors.fgd_6[colorMode]
            }}
            borderRadius={4}
            pt={4}
            pb={4}
          >
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
            leftIcon={<Logout20 />}
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
      <Box w={'86%'}>{children}</Box>
    </HStack>
  );
};

export default Index;
