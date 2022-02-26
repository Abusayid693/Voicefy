import styled from "styled-components";

export const gradientHeading = styled.h1`
  font-size: 72px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const wrapper = styled.div`
  padding: 10% 8%;
`;

export const gridWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto !important;
  gap: 10px;
  justify-items: center;
`;
export const header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
  & h1{
      font-size: 30px;
      font-weight: 600;
  }
  & h2 {
    font-size: 27px;
    font-weight: 300;
  }
`;
