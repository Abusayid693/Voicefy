import * as S from "./style";
import { Dropdown, Slider } from "carbon-components-react";

const Editor = () => {
  return (
    <S.wrapper>
      <S.header>
        <h1>Try out our Text to Speech Editor here👇</h1>
        <h2>Watson Text to Speech Voices</h2>
      </S.header>
      <S.gridWrapper>
        <Dropdown
          ariaLabel="Dropdown"
          id="carbon-dropdown-example"
          items={["ff"]}
          label="Dropdown menu options"
          titleText="Dropdown title"
          style={{ width: "200px" }}
        />
        <Dropdown
          ariaLabel="Dropdown"
          id="carbon-dropdown-example"
          items={["ff"]}
          label="Dropdown menu options"
          titleText="Dropdown title"
          style={{ width: "200px" }}
        />
        <Dropdown
          ariaLabel="Dropdown"
          id="carbon-dropdown-example"
          items={["ff"]}
          label="Dropdown menu options"
          titleText="Dropdown title"
          style={{ width: "200px" }}
        />
        <Dropdown
          ariaLabel="Dropdown"
          id="carbon-dropdown-example"
          items={["ff"]}
          label="Dropdown menu options"
          titleText="Dropdown title"
          style={{ width: "200px" }}
        />
        <Dropdown
          ariaLabel="Dropdown"
          id="carbon-dropdown-example"
          items={["ff"]}
          label="Dropdown menu options"
          titleText="Dropdown title"
          style={{ width: "200px" }}
        />
        <Slider
          ariaLabelInput="Label for slider value"
          id="slider"
          labelText="Slider label"
          max={100}
          min={0}
          step={1}
          value={50}
          onChange={(e) => console.log(e)}
          hideTextInput
        />
      </S.gridWrapper>
    </S.wrapper>
  );
};

export default Editor;
