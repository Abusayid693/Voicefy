import { Stack, Button } from "@chakra-ui/react";
import Link from "next/link";
import { Box } from "@chakra-ui/layout";

const NavPanel: React.FC = () => {
  return (
    <>
      <Stack direction="row" spacing={4} align="center">
        <Link href="/register">
          <Button colorScheme="teal" variant="solid">
            Register
          </Button>
        </Link>
        <Link href="/login">
          <Button colorScheme="teal" variant="outline">
            Login
          </Button>
        </Link>
      </Stack>
    </>
  );
};

export default NavPanel;
