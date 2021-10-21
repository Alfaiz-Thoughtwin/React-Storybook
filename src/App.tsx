import React from "react";
import styled from "styled-components";

interface ITitle {
  color?: string;
  isCenter?: boolean;
}

interface IContainer {
  isCenter?: boolean;
  bgColor?: string;
  margin?: string;
  color?: string;
}

interface ITempBtn {
  btn?: boolean;
}

export const Title = styled.h1<ITitle>`
  color: ${({ color }) => (color ? color : "none")};
  text-align: ${({ isCenter }) => (isCenter ? "center" : "none")};
`;

export const Container = styled.div<IContainer>`
  text-align: ${({ isCenter }) => (isCenter ? "center" : "none")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "none")};
  margin: ${({ margin }) => (margin ? margin : "none")};
  color: ${({ color }) => (color ? color : "none")};
`;

export const TempBtn = styled.button<ITempBtn>`
  ${({ btn }) =>
    btn &&
    `
  background-color : orangered;
  color : white;
  padding : 15px 32px;
  border : none;
  cursor : not-allowed;
`};
`;

const App = () => {
  return (
    <>
        <Container bgColor="black">
          <Title isCenter color="orangered">
            React - Storybook 🔥🔥🔥
          </Title>
        </Container>
        <Container isCenter>
          <TempBtn btn>Temporary</TempBtn>
        </Container>
    </>
  );
};

export default App;
