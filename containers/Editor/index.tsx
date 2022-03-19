import { useState } from "react";
import { voices } from "../../static/polly";
import EditorUI from "./indexUI";

interface IForm {
  provider: string;
  language: string;
  gender: "F" | "M";
  voice: string;
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
  provider: "aws",
  language: "English (Australian)",
  gender: "F",
  voice: "Nicole",
  pitch: "Default",
  text:"Hello World",
  speed: 20,
  availableProvider: ["aws", "ibm"],
  availableLanguage: voices.filter((item) => item.provider === "aws"),
  // availableGender: voices.filter(
  //   (item) =>
  //     item.provider === "aws" && item.language === "English (Australian)"
  // ),
  availableGender: null,
  availableVoice: null,
  // availableVoice: voices.filter(
  //   (item) =>
  //     item.provider === "aws" &&
  //     item.language === "English (Australian)" &&
  //     item.sex == "F"
  // ),
};

const Editor = () => {
  const [formData, setFormData] = useState(initialState);

  const handleFormData = (value: any, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguageChange = (value: any, name: string) => {
    setFormData((prev) => ({
      ...prev,
      ["language"]: value,
      availableGender: voices.filter(
        (item) => item.provider === "aws" && item.language === value
      ),
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
    }));
  };

  return (
    <EditorUI
      formData={formData}
      handleFormData={handleFormData}
      handleLanguageChange={handleLanguageChange}
      handleGenderChange={handleGenderChange}
    />
  );
};

export default Editor;
