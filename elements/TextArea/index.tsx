import { TextArea } from "carbon-components-react";

const TextInputArea = () => {
  return (
    <div>
      <TextArea
        helperText="Optional helper text"
        id="test2"
        invalidText="A valid value is required"
        labelText="Text input label"
        placeholder="Placeholder text"
        style={{height: 300}}
      />
    </div>
  );
};

export default TextInputArea