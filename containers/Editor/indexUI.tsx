import { Slider } from "carbon-components-react";
import { CustomDropdown, Flexbox, IconButton, PrimaryButton, TextInputArea } from "../../elements";
import * as S from "./style";

const EditorUI: React.FC<{
  formData: any;
  handleFormData: any;
  handleLanguageChange: any;
  handleGenderChange: any;
}> = ({ handleFormData,formData, handleLanguageChange, handleGenderChange }) => {
  return (
    <S.wrapper>
      <S.header>
        <h1>Convert Text to Speech using our editor</h1>
        <h2>Watson Text to Speech Voices</h2>
      </S.header>
      <S.gridWrapper>
        <CustomDropdown
          onChangeEvent={(e: any) => handleFormData(e.selectedItem, "provider")}
          label={"Provider"}
          title={"Select Provider"}
          items={formData.availableProvider}
          key={'null'}
        />
        <CustomDropdown
          onChangeEvent={(e: any) => handleLanguageChange(e.selectedItem, "language")}
          label={"Languages"}
          title={"Select Languages"}
          // @ts-ignore
          items={[...new Set(formData.availableLanguage.map((item:any) => item.language))]}
          key={'language'}
        />
        <CustomDropdown
          onChangeEvent={(e: any) => handleGenderChange(e.selectedItem, "gender")}
          label={"Gender"}
          title={"Select Gender"}
          // @ts-ignore
          // items={[...new Set(formData.availableGender.map((item:any) => item.sex))]}
          items={ formData.availableGender!==null ? [...new Set(formData.availableGender.map((item:any) => item.sex))] : []}
          key={'language'}
        />
        <CustomDropdown
          onChangeEvent={(e: any) => handleFormData(e.selectedItem, "voice")}
          label={"Voices"}
          title={"Select Voices"}
          // @ts-ignore
          items={ formData.availableVoice!==null ? [...new Set(formData.availableVoice.map((item:any) => item.id))] : []}
          key={'language'}
        />
        <IconButton />
      </S.gridWrapper>
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
        <PrimaryButton />
      </Flexbox>
    </S.wrapper>
  );
};

export default EditorUI;
