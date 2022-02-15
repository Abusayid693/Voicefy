import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import NavPanel from "../NavPanel";

const NavigationWrapper: React.FC = ({ children }) => {
  return (
    <>
      <Box
        paddingLeft={20}
        paddingRight={20}
        mb={50}
        display={"flex"}
        flexDirection="row"
        justifyContent={'space-between'}
      >
        <Menu colorScheme="teal">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            colorScheme="teal"
            mt={4}
            width="100"
          />
          <MenuList colorScheme="teal" backgroundColor={"#fff"}>
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
        <NavPanel />
      </Box>
      <Box paddingLeft={20} paddingRight={20}>
        {children}
      </Box>
      {/* <Box
        backgroundImage={
          "linear-gradient( 102.4deg,  rgba(253,189,85,1) 7.8%, rgba(249,131,255,1) 100.3% );"
        }
        height={20}
      /> */}
    </>
  );
};

export default NavigationWrapper;
