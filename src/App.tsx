import React from "react";
import styled from "styled-components";
import { Button } from "./components";

interface ITitle {
  color?:string;
  isCenter?: boolean;
}

interface IContainer {
  isCenter?: boolean;
  bgColor?:string;
}

export const Title = styled.h1<ITitle>`
  color: ${( { color } ) => ( color ? color : "none")};
  text-align: ${({ isCenter }) => (isCenter ? "center" : "none")};
`;

export const Container = styled.div<IContainer>`
  text-align: ${({ isCenter }) => (isCenter ? "center" : "none")};
  background-color : ${({ bgColor }) => ( bgColor ? bgColor : "none")};
`;

const App = () => {
  return (
    <>
      <Container bgColor="black">
        <Title isCenter color="orangered">
          Storybook
        </Title>
      </Container>

      <Container>
        <Button />
      </Container>
    </>
  );
};

export default App;
