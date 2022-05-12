import styled from "@emotion/styled";
import { TextArea } from "carbon-components-react";


const Wrapper = styled.div`

position: relative;
text-align:center;
height: fit-content;
padding: 4px;

&::after{
  position: absolute;
  content:"Converting...";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  text-transform: uppercase;
  display: none;
}
`

const TextInputArea = () => {
  return (
    <Wrapper>
      <TextArea
        id="test2"
        // disabled={true}
        invalidText="A valid value is required"
        labelText=""
        placeholder="Placeholder text"
        style={{height: 300}}
        onChange={(e) => console.log(e.target.value)}
      />
    </Wrapper>
  );
};

export default TextInputArea