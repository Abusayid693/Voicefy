import { Button, Stack } from "@chakra-ui/react";
import Link from "next/link";

const NavPanel: React.FC = () => {
  return (
    <>
      <Stack direction="row" spacing={4} align="center">
        <Link href="/register">
          <Button colorScheme="teal" variant="primary">
            Register
          </Button>
        </Link>
        <Link href="/login">
          <Button colorScheme="teal" variant="secondary">
            Login
          </Button>
        </Link>
      </Stack>
    </>
  );
};

export default NavPanel;
