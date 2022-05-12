import {RepeatIcon} from '@chakra-ui/icons';
import {Box, Button, Grid, IconButton} from '@chakra-ui/react';
import {Slider} from 'carbon-components-react';
import EditorHeading from 'components/EditorHeading';
import {CustomDropdown, Flexbox, TextInputArea} from 'elements';
import {filterDataUsingSet} from 'util/filter';

const EditorUI: React.FC<{
  formData: any;
  handleFormData: any;
  handleLanguageChange: any;
  handleGenderChange: any;
  handleProviderChange: any;
}> = ({
  handleFormData,
  formData,
  handleLanguageChange,
  handleGenderChange,
  handleProviderChange
}) => {
  return (
    <Box
      display={'flex'}
      flexDirection="column"
      padding={'5% 10%'}
      bg="black.primary"
    >
      <EditorHeading />
      <Grid
        templateColumns="repeat(3, 1fr)"
        gridRowGap={30}
        templateRows="repeat(2, 1fr)"
        bg="black.100"
        p={10}
      >
        <CustomDropdown
          onChangeEvent={(e: any) =>
            handleProviderChange(e.selectedItem, 'provider')
          }
          label={'Provider'}
          title={'Select Provider'}
          items={formData.availableProvider}
          key={'null'}
          id={'Provider'}
          value={formData.provider}
        />
        <CustomDropdown
          onChangeEvent={(e: any) =>
            handleLanguageChange(e.selectedItem, 'language')
          }
          label={'Languages'}
          title={'Select Languages'}
          items={filterDataUsingSet(formData.availableLanguage, 'language')}
          key={'language'}
          value={formData.language}
          id={'language'}
        />
        <CustomDropdown
          onChangeEvent={(e: any) =>
            handleGenderChange(e.selectedItem, 'gender')
          }
          label={'Gender'}
          title={'Select Gender'}
          items={filterDataUsingSet(formData.availableGender, 'sex')}
          key={'gender'}
          value={formData.gender}
          id={'gender'}
        />
        <CustomDropdown
          onChangeEvent={(e: any) => handleFormData(e.selectedItem, 'voice')}
          label={'Voices'}
          title={'Select Voices'}
          items={filterDataUsingSet(formData.availableVoice, 'id')}
          key={'voice'}
          value={formData.voice}
          id={'voice'}
        />
        <IconButton
          w={45}
          h={45}
          mt={7}
          aria-label="Search database"
          icon={<RepeatIcon color={'white.100'} />}
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
          onChange={(e: any) => handleFormData(e.value, 'speed')}
          hideTextInput
        />
        <Button
          rightIcon={<RepeatIcon color={'white.100'} />}
          variant="twitter"
          pl={8}
          pr={8}
        >
          Submit
        </Button>
      </Flexbox>
    </Box>
  );
};

export default EditorUI;
