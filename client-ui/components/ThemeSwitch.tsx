import {Asleep32, Sun32} from '@carbon/icons-react';
import {Button, useColorMode, useColorModeValue} from '@chakra-ui/react';

const ThemeToggle = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const bg = useColorModeValue('black.100', 'white.100');
  return (
    <header>
      <Button w={12} h={12} variant={'round'} bg={bg} onClick={toggleColorMode}>
        {colorMode === 'light' ? (
          <Asleep32 color="white" />
        ) : (
          <Sun32 color="black" />
        )}
      </Button>
    </header>
  );
};

export default ThemeToggle;
