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

const UserPanel = () => {
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
          backgroundColor: 'yellow.200'
        }}
        _active={{
          backgroundColor: 'yellow.200'
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
      <MenuList backgroundColor={'white.100'}>
        <MenuItem minH="48px" onClick={() => alert('profile')}>
          <span>Profile</span>
        </MenuItem>
        <MenuItem minH="40px">
          <span>Logout</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserPanel;
