import { useState } from "react";
import { voices } from "../../static/polly";
import EditorUI from "./indexUI";

interface IForm {
  provider: string | null;
  language: string | null;
  gender: "F" | "M" | null;
  voice: string | null;
  pitch: string;
  speed: number;
  text: string;
  //-----------------------//
  availableProvider?: any;
  availableLanguage?: any;
  availableGender?: any;
  availableVoice?: any;
}
const initialState: IForm = {
  provider: null,
  language: null,
  gender: null,
  voice: null,
  pitch: "Default",
  text:"Hello World",
  speed: 20,
  availableProvider: ["aws", "ibm"],
  availableLanguage: null,
  availableGender: null,
  availableVoice: null,
};

const Editor = () => {
  const [formData, setFormData] = useState(initialState);

  const handleFormData = (value: any, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleProviderChange = (value: any, name: string) => {
    setFormData((prev) => ({
      ...prev,
      ["provider"]: value,
      availableLanguage: voices.filter((item) => item.provider === value),
      availableGender: null,
      gender: null,
      language : null,
      availableVoice: null,
    }));
  };


  const handleLanguageChange = (value: any, name: string) => {
    setFormData((prev) => ({
      ...prev,
      ["language"]: value,
      availableGender: voices.filter(
        (item) => item.provider === "aws" && item.language === value
      ),
      gender: null,
      voice: null,
      availableVoice: null,
    }));
  };

  const handleGenderChange = (value: any, name: string) => {
    setFormData((prev) => ({
      ...prev,
      ["gender"]: value,
      availableVoice: voices.filter(
        (item) =>
          item.provider === "aws" &&
          item.language === formData.language &&
          item.sex == value
      ),
      voice: null
    }));
  };

  return (
    <EditorUI
      formData={formData}
      handleFormData={handleFormData}
      handleLanguageChange={handleLanguageChange}
      handleGenderChange={handleGenderChange}
      handleProviderChange={handleProviderChange}
    />
  );
};

export default Editor;
