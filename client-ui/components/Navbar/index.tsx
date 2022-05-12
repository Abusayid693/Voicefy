import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon
} from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout';
import {
  HStack, IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode
} from '@chakra-ui/react';
import colors from 'style/mode';
import { useAuth } from '../../contexts/Auth';
import NavPanel from '../NavPanel';
import ThemeToggle from '../ThemeSwitch';
import UserPanel from '../UserPanel';

const NavigationWrapper: React.FC = ({children}) => {
  const auth = useAuth();
  const {colorMode} = useColorMode();
  const Panel = () => (auth.isAuthenticated() ? <UserPanel /> : <NavPanel />);

  return (
    <>
      <Box
        paddingLeft={20}
        paddingRight={20}
        display={'flex'}
        flexDirection="row"
        justifyContent={'space-between'}
        bg={colors.fgd_2[colorMode]}
        pt={4}
      >
        <Menu colorScheme="teal">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            bg="white.100"
            width="100"
          />
          <MenuList colorScheme="teal" backgroundColor={'#fff'}>
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
              New Window
            </MenuItem>
            <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
              Open Closed Tab
            </MenuItem>
            <MenuItem icon={<EditIcon />} command="⌘O">
              Open File...
            </MenuItem>
          </MenuList>
        </Menu>
        <HStack >
          <ThemeToggle />
          <Panel />
        </HStack>
      </Box>
      <Box paddingLeft={20} paddingRight={20}>
        {children}
      </Box>
    </>
  );
};

export default NavigationWrapper;
