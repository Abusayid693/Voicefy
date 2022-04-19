import { ExternalLinkIcon, InfoIcon, RepeatIcon } from "@chakra-ui/icons";
import { Box, Button, Grid, Heading, IconButton } from "@chakra-ui/react";
import { Slider } from "carbon-components-react";
import {
  CustomDropdown,
  Flexbox,
  TextInputArea
} from "elements";

const EditorUI: React.FC<{
  formData: any;
  handleFormData: any;
  handleLanguageChange: any;
  handleGenderChange: any;
}> = ({
  handleFormData,
  formData,
  handleLanguageChange,
  handleGenderChange,
}) => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      padding={"5% 10%"}
      bg="black.primary"
    >
      <Box
        display={"flex"}
        alignItems="center"
        flexDirection={"column"}
        bg="black.200"
        borderTopRightRadius={10}
        borderTopLeftRadius={10}
        pt={9}
        pb={9}
        position="relative"
      >
        <ExternalLinkIcon
          h={6}
          w={6}
          color="grey.200"
          position={"absolute"}
          top={5}
          right={5}
        />
          <InfoIcon
          h={6}
          w={6}
          color="grey.200"
          position={"absolute"}
          top={5}
          right={20}
        />
        <Heading color={"white.100"}>
          Convert Text to Speech using our editor
        </Heading>
        <Heading color={"white.100"} fontSize={25} fontWeight={300}>
          Watson Text to Speech Voices
        </Heading>
      </Box>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gridRowGap={30}
        templateRows="repeat(2, 1fr)"
        bg="black.100"
        p={10}
      >
        <CustomDropdown
          onChangeEvent={(e: any) => handleFormData(e.selectedItem, "provider")}
          label={"Provider"}
          title={"Select Provider"}
          items={formData.availableProvider}
          key={"null"}
        />
        <CustomDropdown
          onChangeEvent={(e: any) =>
            handleLanguageChange(e.selectedItem, "language")
          }
          label={"Languages"}
          title={"Select Languages"}
          // @ts-ignore
          items={[
            ...new Set(
              formData.availableLanguage.map((item: any) => item.language)
            ),
          ]}
          key={"language"}
        />
        <CustomDropdown
          onChangeEvent={(e: any) =>
            handleGenderChange(e.selectedItem, "gender")
          }
          label={"Gender"}
          title={"Select Gender"}
          // @ts-ignore
          // items={[...new Set(formData.availableGender.map((item:any) => item.sex))]}
          items={
            formData.availableGender !== null
              ? [
                  ...new Set(
                    formData.availableGender.map((item: any) => item.sex)
                  ),
                ]
              : []
          }
          key={"language"}
        />
        <CustomDropdown
          onChangeEvent={(e: any) => handleFormData(e.selectedItem, "voice")}
          label={"Voices"}
          title={"Select Voices"}
          // @ts-ignore
          items={
            formData.availableVoice !== null
              ? [
                  ...new Set(
                    formData.availableVoice.map((item: any) => item.id)
                  ),
                ]
              : []
          }
          key={"language"}
        />
        <IconButton
          w={45}
          h={45}
          mt={7}
          aria-label="Search database"
          icon={<RepeatIcon color={"white.100"} />}
          variant="twitter"
        />
      </Grid>
      <TextInputArea />
      <Flexbox flexRow alignStart>
        <Slider
          ariaLabelInput="Label for slider value"
          id="slider"
          labelText="Slider label"
          max={100}
          min={0}
          step={1}
          value={50}
          onChange={(e: any) => handleFormData(e.value, "speed")}
          hideTextInput
        />
        <Button rightIcon={<RepeatIcon color={"white.100"} />}  variant="twitter" pl={8} pr={8}>
          Submit
        </Button>
      </Flexbox>
    </Box>
  );
};

export default EditorUI;
