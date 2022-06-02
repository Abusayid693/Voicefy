import {ChevronDownIcon} from '@chakra-ui/icons';
import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode
} from '@chakra-ui/react';
import colors from 'style/mode';
import useAuth from '../../hooks/useAuth';

const UserPanel = () => {
  const {logout, currentUser} = useAuth();
  const {colorMode} = useColorMode();
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon color={'black.primary'} />}
        bg={colors.fgd_1[colorMode]}
        border={'10px'}
        borderColor={'yellow.100'}
        _hover={{
          opacity: 0.8
        }}
        _active={{
          opacity: 0.8
        }}
      >
        <Image
          boxSize="2rem"
          borderRadius="full"
          src="https://placekitten.com/100/100"
          alt="Fluffybuns the destroyer"
          mr="12px"
        />
      </MenuButton>
      <MenuList color={colors.fgd_2[colorMode]} bg={colors.fgd_3[colorMode]}>
        <MenuItem
          minH="48px"
          _hover={{
            bg: colors.fgd_4[colorMode]
          }}
          _active={{
            bg: colors.fgd_4[colorMode]
          }}
          _focus={{
            bg: colors.fgd_4[colorMode]
          }}
        >
          <span>Profile</span>
        </MenuItem>
        <MenuItem
          minH="40px"
          onClick={logout}
          _hover={{
            bg: colors.fgd_4[colorMode]
          }}
          _active={{
            bg: colors.fgd_4[colorMode]
          }}
          _focus={{
            bg: colors.fgd_4[colorMode]
          }}
        >
          <span>Logout</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserPanel;
