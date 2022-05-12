import {Heading, HeadingProps} from '@chakra-ui/layout';
import {ReactNode} from 'react';
import styled, {css} from 'styled-components';

export const GradientHeading = styled(Heading)`
  ${({theme}) => css`
    font-size: 72px;
    background: linear-gradient(
      102.4deg,
      rgba(253, 189, 85, 1) 7.8%,
      rgba(249, 131, 255, 1) 100.3%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  `}
`;

interface Props extends HeadingProps {
  children: ReactNode;
}

const GradientText: React.FC<Props> = ({children, ...rest}) => {
  return <GradientHeading {...rest}>{children}</GradientHeading>;
};

export default GradientText;
