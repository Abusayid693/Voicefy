import { useState } from "react";
import EditorUI from "./indexUI";
import { voices } from "../../static/polly"

interface IForm {
  provider: string;
  language: string;
  gender: "F" | "M";
  voice: string;
  pitch: string;
  speed: number;
  availableProvider?: any;
  availableLanguage?: any;
  availableVoice?: any;
}
const initialState: IForm = {
  provider: "aws",
  language: "English (Australian)",
  gender: "F",
  voice: "Nicole",
  pitch: "Default",
  speed: 20,
  availableProvider: ['aws'],
  availableLanguage: voices.filter((item) => item.provider === 'aws'),
  availableVoice: voices.filter((item) => item.language === 'Danish'),
};

const Editor = () => {
  const [formData, setFormData] = useState(initialState);

  const handleFormData = (value: any, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(formData.availableVoice)

  return <EditorUI formData={formData} handleFormData={handleFormData} />;
};

export default Editor;
