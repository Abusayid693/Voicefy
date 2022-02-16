import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const UserPanel = () => {
  return (
    <Menu>
      <MenuButton
        colorScheme="teal"
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        <Image
          boxSize="2rem"
          borderRadius="full"
          src="https://placekitten.com/100/100"
          alt="Fluffybuns the destroyer"
          mr="12px"
        />
      </MenuButton>
      <MenuList backgroundColor={"#fff"}>
        <MenuItem minH="48px" onClick={()=> alert('profile')}>
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
