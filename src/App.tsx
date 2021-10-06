import React from 'react';
import styled from 'styled-components';

interface ITitle {
  isColor?: boolean;
  isCenter?: boolean;
}

const Title = styled.h1<ITitle>`
  color: ${({ isColor })=>( isColor ? "red" : "none" )};
  text-align: ${({ isCenter })=>( isCenter ? "center" : "none" )};
`;


const App = () => {
  return (
    <>
      <Title isCenter isColor>Storybook</Title>
    </>
  )
}

export default App;
