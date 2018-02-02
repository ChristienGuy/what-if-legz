import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  position: relative;
  background-color: #f57c00;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    bottom: calc(-10vw + 3px);
    height: 10vw;
    left:0;
    background-color: #f57c00;
    width: 100%;
    transform-origin: 100% 0;
    transform: skew(0, 3deg);
  }
`;

// const Background = styled.div`
//   position: absolute;
//   top: 40%;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   height: 200%;
//   transform: skew(0deg, 8deg);
  
//   z-index: 0;
// `;

const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  z-index: 1;
  position: relative;
  color: #fff;
`;
const Header = () => (
  <Wrapper>
    <Title>What If Legz?</Title>
    {/* <Background /> */}
  </Wrapper>
);

export default Header;
