import Editor from "../Editor";
import * as S from "./style";

const Main = () => {
  return (
    <>
      <S.wrapper>
          <img height={"320px"} width= {"320px"} src="https://i.pinimg.com/564x/d5/e6/9c/d5e69cfa02480e40c4af28930131cb64.jpg"/>
        <S.gradientHeading>Hey, Try Our Editor Now</S.gradientHeading>
        <h2>A Software developer specialising in building <br/> performant frontend applications</h2>
      </S.wrapper>
      <Editor />
    </>
  );
};

export default Main;
