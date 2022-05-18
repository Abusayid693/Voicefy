import {RepeatIcon} from '@chakra-ui/icons';
import {Box, Button, Grid, IconButton, useColorMode} from '@chakra-ui/react';
import {Slider} from 'carbon-components-react';
import {AudioPlayer, CustomDropdown, Flexbox, TextInputArea} from 'elements';
import useModalState from 'hooks/useModalState';
import useTtsVoice from 'hooks/useTtsVoice';
import {useEffect} from 'react';
import colors from 'style/mode';
import {filterDataUsingSet, isAnyNull} from 'util/utils';
import {IForm} from './index';

const EditorUI: React.FC<{
  formData: IForm;
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
  const {colorMode} = useColorMode();

  const {data, loading, resetCachedData, convertTextToAudio} = useTtsVoice();
  const {isOpen, setOpen, setClose} = useModalState();

  useEffect(() => {
    resetCachedData();
  }, [formData]);

  const ttsInputData = {
    provider: 'aws',
    ssmlText: formData.text,
    VoiceId: formData.voice,
    lan: formData.language
  };

  return (
    <Box
      display={'flex'}
      flexDirection="column"
      bg={'transparent'}
      width={'100%'}
    >
      {/* <EditorHeading /> */}
      <Grid
        templateColumns="repeat(3, 1fr)"
        gridRowGap={30}
        templateRows="repeat(2, 1fr)"
        bg={colors.fgd_5[colorMode]}
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
          items={filterDataUsingSet(formData.availableLanguage, 'lanCode')}
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
      <TextInputArea
        value={formData.text}
        loading={loading}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFormData(e.target.value, 'text')
        }
      />
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
        {!data?.url && (
          <Button
            rightIcon={<RepeatIcon color={'white.100'} />}
            variant="twitter"
            disabled={isAnyNull(formData)}
            pl={8}
            pr={8}
            onClick={() => convertTextToAudio(ttsInputData)}
          >
            Submit
          </Button>
        )}
        {data?.url && (
          <>
            <Button
              rightIcon={<RepeatIcon color={'white.100'} />}
              variant="twitter"
              pl={8}
              pr={8}
              onClick={setOpen}
            >
              Play
            </Button>
            (
            <AudioPlayer url={data.url} isOpen={isOpen} onClose={setClose} />
          </>
        )}
      </Flexbox>
    </Box>
  );
};

export default EditorUI;
