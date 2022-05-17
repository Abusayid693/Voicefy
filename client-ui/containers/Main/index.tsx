import {Box, Heading} from '@chakra-ui/layout';
import {useColorMode} from '@chakra-ui/react';
import {GradientHeading, ImageContainer} from 'elements';
import colors from 'style/mode';
import Editor from '../Editor';

const Main = () => {
  const {colorMode} = useColorMode();

  return (
    <>
      <Box
        display="flex"
        alignItems={'center'}
        justifyContent="center"
        flexDirection={'column'}
        paddingBottom={40}
        bg={colors.fgd_2[colorMode]}
      >
        <ImageContainer
          h={320}
          w={320}
          src="/icons/brand-large.jpg"
          title=""
          alt=""
        />
        <GradientHeading fontSize={52} mt={20} mb={5}>
          Hey, Try Our Editor Now
        </GradientHeading>
        <Heading
          color={colors.fgd_3[colorMode]}
          fontSize={25}
          fontWeight={400}
          textAlign="center"
        >
          A Software for creating short
          <br /> videos, instagram reels with high quality AI voices.
        </Heading>
      </Box>
      <Editor />
    </>
  );
};

export default Main;
