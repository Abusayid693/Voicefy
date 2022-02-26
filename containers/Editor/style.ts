import styled from "styled-components";

export const gradientHeading = styled.h1`
  font-size: 72px;
  background: -webkit-linear-gradient(rgba(99,251,215,1), rgba(5,222,250,1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
// background-image: linear-gradient( 68.4deg,  rgba(99,251,215,1) -0.4%, rgba(5,222,250,1) 100.2% );
export const wrapper = styled.div`
  padding: 10% 8%;
  display: block;
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
