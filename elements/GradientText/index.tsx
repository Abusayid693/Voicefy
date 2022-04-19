import { Heading, HeadingProps } from "@chakra-ui/layout";
import { ReactNode } from "react";
import styled, { css } from "styled-components";

export const GradientHeading = styled(Heading)`
  ${({ theme }) => css`
    font-size: 72px;
    background: -webkit-linear-gradient(
      rgba(99, 251, 215, 1),
      rgba(5, 222, 250, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  `}
`;

interface Props extends HeadingProps {
  children: ReactNode;
}

const GradientText: React.FC<Props> = ({ children, ...rest }) => {
  return <GradientHeading {...rest}>{children}</GradientHeading>;
};

export default GradientText;
