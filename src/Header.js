import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 40px;
  position: relative;
  background-color: #F57C00;
`;

const Background = styled.div`
  position: absolute;
  top: 40%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 200%;
  transform: skew(0deg, 8deg);
  background-color: #F57C00;
  z-index: 0;
`;
const Title = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
  z-index: 1;
  position: relative;
`;
const Header = () => (
  <Wrapper>
    <Title>What If Legz?</Title>
    <Background />
  </Wrapper>
);

export default Header;
