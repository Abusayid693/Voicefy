import {ChevronDownIcon} from '@chakra-ui/icons';
import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';

const UserPanel = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon color={'black.primary'} />}
        backgroundColor={'yellow.100'}
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
