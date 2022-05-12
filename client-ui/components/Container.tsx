import {Box} from '@chakra-ui/layout';

interface containerProps {
  varient?: 'small' | 'regular';
  align?: boolean;
}

export const Container: React.FC<containerProps> = ({
  children,
  varient = 'regular'
}) => {
  return (
    <Box
      maxW={varient === 'regular' ? '800px' : '400px'}
      w="100%"
      mt={8}
      mx="auto"
    >
      {children}
    </Box>
  );
};
