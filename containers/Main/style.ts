import styled from "styled-components";

export const gradientHeading = styled.h1`
  font-size: 72px;
  background: -webkit-linear-gradient(rgba(99,251,215,1), rgba(5,222,250,1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;
export const wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 50px;
  & h2{
      font-size: 23px;
      text-align: center;
  }
  & img{
      margin: 0;
  }
`;