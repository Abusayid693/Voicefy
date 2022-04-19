import { Box, Heading } from "@chakra-ui/layout";
import { GradientHeading, ImageContainer } from "elements";
import Editor from "../Editor";

const Main = () => {
  return (
    <>
      <Box
        bg={"black.primary"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        flexDirection={"column"}
        paddingBottom={40}
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
          color={"white.100"}
          fontSize={25}
          fontWeight={400}
          textAlign="center"
        >
          A Software developer specialising in building <br /> performant
          frontend applications
        </Heading>
      </Box>
      <Editor />
    </>
  );
};

export default Main;
