import * as S from "./style";
import { Slider } from "carbon-components-react";
import CustomDropdown from "../../elements/Dropdown";

const EditorUI: React.FC<{
  formData: any;
  handleFormData: any;
}> = ({ handleFormData }) => {
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
        />
        <CustomDropdown
          onChangeEvent={(e: any) => handleFormData(e.selectedItem, "language")}
          label={"Languages"}
          title={"Select Languages"}
        />
        <CustomDropdown
          onChangeEvent={(e: any) => handleFormData(e.selectedItem, "gender")}
          label={"Gender"}
          title={"Select Gender"}
        />
        <CustomDropdown
          onChangeEvent={(e: any) => handleFormData(e.selectedItem, "voice")}
          label={"Voices"}
          title={"Select Voices"}
        />
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
      </S.gridWrapper>
    </S.wrapper>
  );
};

export default EditorUI;
